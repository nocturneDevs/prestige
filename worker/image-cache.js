var cacheSize = 5;

imageToBase64Url = function(image) {
  var canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);

  return canvas.toDataURL("image/png");
};

imageFetch = function(success) {
  var imageCategories = ["buildings", "nature", "objects", "people", "technology"];
  var image = new Image();
  var randomCategory = imageCategories[Math.floor(Math.random() * imageCategories.length)];
  var baseUrl = 'https://source.unsplash.com/category/'
  image.src =  baseUrl + randomCategory + '/2880x1800';
  image.crossOrigin = 'Anonymous';
  image.onload = function() {
    success(image);
  };
};

updateImage = function(key) {
  console.log('Updating ' + key);
  localStorage.setItem(key, moment().toISOString());
  imageFetch(function (image) {
    var dataUrl = imageToBase64Url(image);
    localforage.setItem(key, dataUrl, function() {
      localStorage.setItem(key, 'ready');
    });
  });
};

clearCache = function() {
  console.log("clear cache");
  localStorage.setItem('prestige_next_image', '0');
  for (var i = 0; i < cacheSize; i++) {
    oldDate = moment().subtract(1, 'days').toISOString();
    var key = 'prestige_image_' + i;
    localStorage.setItem(key, oldDate);
  }
};

updateCache = function() {
  console.log("update cache");
  if (!localStorage.getItem('prestige_next_image')) {
    localStorage.setItem('prestige_next_image', '0');
  }
  for (var i = 0; i < cacheSize; i++) {
    var key = 'prestige_image_' + i;
    if (!localStorage.getItem(key) || localStorage.getItem(key) === 'used') {
      updateImage(key);
    } else if (localStorage.getItem(key) === 'ready') {
      // Do nothing
    } else {
      var loadingStartTime = moment(localStorage.getItem(key));
      if (moment().diff(loadingStartTime, 'seconds') > 10) {
        updateImage(key);
      }
    }
  }
};

window.getImage = function(successCallback, errorCallback) {
  console.log("get image");
  var imageId = parseInt(localStorage.getItem('prestige_next_image'));
  var imageKey = 'prestige_image_' + imageId;
  var imageState = localStorage.getItem(imageKey);
  if (imageState === 'ready') {
    localforage.getItem(imageKey, function(err, image) {
      if (err) {
        errorCallback();
      } else {
        localStorage.setItem('prestige_next_image', (imageId + 1)%5);
        successCallback(image);
        localStorage.setItem(imageKey, "used");
      }
    });
  } else {
    errorCallback();
  }
}

clearCache();
updateCache();
setInterval(updateCache, 3000);
