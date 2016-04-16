var Background = React.createClass({
  displayName: 'Background',

  getInitialState: function() {
    return {
      backgroundUrl: ''
    };
  },

  componentDidMount: function() {
    this.imageAdapter = new Prestige.ImageAdapter();
    this.imageCache = new Prestige.ImageCache({ key: 'prestige_image' });
    this.loadImage();
  },

  loadImage: function() {
    this.imageCache.read(function(err, val) {
      if (!err && val) {
        this.setState({ backgroundUrl: val });
        if (this.imageCache.isStale()) {
          this.fetchImage();
        }
      } else {
        this.fetchImage();
      }
    }.bind(this));
  },

  fetchImage: function() {
    this.imageAdapter.fetch(function(image) {
      this.cacheImage(image);
      this.setState({ backgroundUrl: Prestige.imageToBase64Url(image) });
    }.bind(this));
  },

  cacheImage: function(image) {
    this.imageCache.write(image, moment().add(1, 'minutes').toISOString());
  },

  render: function() {
    var style = {
      app: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundColor: "black",
        backgroundImage: 'url(' + this.state.backgroundUrl + ')',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }
    return (
      <div style={style.app}>
        {this.props.children}
      </div>
    )
  }
});
