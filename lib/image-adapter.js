window.Prestige = window.Prestige || {};

Prestige.ImageAdapter = function() {
  this.resolution = [2880, 1800];
};

Prestige.ImageAdapter.prototype.url = function(success) {
  return [
    'https://source.unsplash.com/random/',
    this.resolution[0],
    'x',
    this.resolution[1]
  ].join('');
}

Prestige.ImageAdapter.prototype.fetch = function(success) {
  var image = new Image();
  image.src = this.url();
  image.crossOrigin = 'Anonymous';
  image.onload = function() {
    success(image);
  };
};
