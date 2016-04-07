window.onload = function() {
  var image = new Image();
  image.src = 'https://source.unsplash.com/random/2880x1800'
  image.onload = function() {
    document.getElementById('image').style.backgroundImage = 'url(' + image.src + ')';
  };
}