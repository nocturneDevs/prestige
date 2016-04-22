var Background = React.createClass({
  displayName: 'Background',

  getDefaultProps: function() {
    return {
      defaultBackgroundUrl: '/images/default.jpg'
    }
  },

  getInitialState: function() {
    return {
      backgroundUrl: '/images/transparent.png'
    };
  },

  componentDidMount: function() {
    this.loadImage();
  },

  loadImage: function(attempts) {
    attempts = attempts || 0;
    var success = function (image) {
      this.setState({backgroundUrl: image});
    }.bind(this);

    var error = function () {
      attempts += 1;
      console.log(attempts);
      if (attempts < 5) {
        setTimeout(function() { this.loadImage(attempts) }.bind(this), 1000);
      } else {
        this.setState({backgroundUrl: this.props.defaultBackgroundUrl});
      }
    }.bind(this);

    chrome.extension.getBackgroundPage().getImage(success, error);
  },

  render: function() {
    var style = {
      app: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundColor: 'black',
        backgroundImage: 'url(' + this.state.backgroundUrl + ')',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-image 0.7s ease-in'
      }
    }
    return (
      <div style={style.app}>
        {this.props.children}
      </div>
    )
  }
});
