window.Prestige = window.Prestige || {};

Prestige.imageToBase64Url = function(image) {
  var canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);

  return canvas.toDataURL("image/png");
};
