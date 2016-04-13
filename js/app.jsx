var AppBackground = React.createClass({
  displayName: 'AppBackground',

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
        this.fetchBackgroundImage();
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
      var dataUrl = this.getBase64Image(image);
      this.cacheBackgroundImage(dataUrl);
      this.setState({ backgroundUrl: this.getBase64Image(image) });
    }.bind(this);
  },

  cacheBackgroundImage: function(dataUrl) {
    localforage.setItem('prestige_background_image', dataUrl)
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

var WidgetContainer = React.createClass({
  displayName: "WidgetContainer",
  render: function() {
    var style = {
      hero: {
        fontSize: "3rem",
        maxWidth: "100%",
        padding: "2rem",
        backgroundImage: "radial-gradient(closest-side at 50% 50% , rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)"
      }
    }
    return (
      <div style={style[this.props.position]}>
        {this.props.children}
      </div>
    )
  }
});

var App = React.createClass({
  displayName: "App",
  render: function() {
    return (
      <AppBackground>
        <WidgetContainer position="hero">
          <TimeDisplay />
        </WidgetContainer>
      </AppBackground>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
