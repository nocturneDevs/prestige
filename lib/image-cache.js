window.Prestige = window.Prestige || {};

Prestige.ImageCache = function(opts = {}) {
  this.key = opts.key;
};

Prestige.ImageCache.prototype.write = function(image) {
  var dataUrl = Prestige.imageToBase64Url(image);
  localforage.setItem(this.key, dataUrl);
};

Prestige.ImageCache.prototype.read = function(callback) {
  localforage.getItem(this.key, callback);
};
