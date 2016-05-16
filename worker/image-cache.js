var cacheSize = 5;

imageToBase64Url = function(image) {
  var canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);

  return canvas.toDataURL("image/png");
};

imageFetch = function(resolutionIndex, success) {
  var image = new Image();
  var imageResolution = ['1920x1080', '1920x1090', '1920x1100', '1920x1110', '1920x1120'];
  var baseUrl = 'https://source.unsplash.com/collection/220267/';
  image.src =  baseUrl + imageResolution[resolutionIndex];
  image.crossOrigin = 'Anonymous';
  image.onload = function() {
    success(image);
  };
};

updateImage = function(key, resolutionIndex) {
  console.log('Updating ' + key);
  localStorage.setItem(key, moment().toISOString());
  imageFetch(resolutionIndex, function (image) {
    var dataUrl = imageToBase64Url(image);
    localforage.setItem(key, dataUrl, function() {
      localStorage.setItem(key, 'ready');
    });
  });
};

updateCache = function() {
  console.log("update cache");
  if (!localStorage.getItem('prestige_next_image')) {
    localStorage.setItem('prestige_next_image', '0');
  }
  for (var i = 0; i < cacheSize; i++) {
    var key = 'prestige_image_' + i;
    if (!localStorage.getItem(key) || localStorage.getItem(key) === 'used') {
      updateImage(key, i);
    } else if (localStorage.getItem(key) === 'ready') {
      // Do nothing
    } else {
      var loadingStartTime = moment(localStorage.getItem(key));
      if (moment().diff(loadingStartTime, 'seconds') > 10) {
        updateImage(key, i);
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

updateCache();
setInterval(updateCache, 3000);
