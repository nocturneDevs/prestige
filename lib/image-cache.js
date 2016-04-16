window.Prestige = window.Prestige || {};

Prestige.ImageCache = function(opts) {
  opts = opts || {};
  this.key = opts.key;
};

Prestige.ImageCache.prototype.write = function(image, expiresAt) {
  var dataUrl = Prestige.imageToBase64Url(image);
  localStorage.setItem(this.key, expiresAt);
  localforage.setItem(this.key, dataUrl);
};

Prestige.ImageCache.prototype.read = function(callback) {
  localforage.getItem(this.key, callback);
};

Prestige.ImageCache.prototype.isStale = function() {
  var expiresAt = moment(localStorage.getItem(this.key));
  return (expiresAt.isValid() ? (moment().diff(expiresAt) > 0) : true);
};
