var App = React.createClass({
  displayName: 'App',

  getInitialState: function() {
    return {
      backgroundUrl: ''
    };
  },

  componentDidMount: function() {
    this.loadBackgroundImage();
  },

  loadBackgroundImage: function() {
    localforage.getItem('prestige_background_image', function(err, val) {
      if (!err && val) {
        this.setState({ backgroundUrl: val });
      } else {
        this.fetchBackgroundImage();
      }
    }.bind(this));
  },

  fetchBackgroundImage: function() {
    var image = new Image();
    image.src = 'https://source.unsplash.com/random/2880x1800';
    image.crossOrigin = 'Anonymous';
    image.onload = function() {
      var url = this.getBase64Image(image);
      this.cacheBackgroundImage(url);
      this.setState({ backgroundUrl: this.getBase64Image(image) });
    }.bind(this);
  },

  cacheBackgroundImage: function(url) {
    localforage.setItem('prestige_background_image', url)
  },

  getBase64Image: function(image) {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    return canvas.toDataURL("image/png");
  },

  render: function() {
    var style = {
      app: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundImage: 'url(' + this.state.backgroundUrl + ')'
      }
    }
    return (
      <div style={style.app}>
        New tab
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
