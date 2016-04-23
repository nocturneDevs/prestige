var Background = React.createClass({
  displayName: "Background",

  getDefaultProps: function() {
    return {
      defaultBackgroundUrl: "/images/default.jpg"
    }
  },

  getInitialState: function() {
    return {
      backgroundUrl: "/images/black.png",
      lastBackgroundUrl: "/images/black.png",
      maskOpacity: 0,
      maskTransition: "none"
    };
  },

  componentDidMount: function() {
    this.loadImage();
  },

  loadImage: function(attempts) {
    attempts = attempts || 0;
    var success = function (image) {
      this.transitionBackground(image);
    }.bind(this);

    var error = function () {
      attempts += 1;
      if (attempts < 5) {
        setTimeout(function() { this.loadImage(attempts) }.bind(this), 1000);
      } else {
        this.transitionBackground(this.props.defaultBackgroundUrl);
      }
    }.bind(this);

    chrome.extension.getBackgroundPage().getImage(success, error);
  },

  transitionBackground: function(image) {
    this.setState({
      maskTransition: "none",
      maskOpacity: "1",
      lastBackgroundUrl: this.state.backgroundUrl
    });

    // Make these async to avoid React over-optimizing, and ensure that view is
    // rendered with previous state changes before this set of state changes.
    setTimeout(function() {
      this.setState({
        maskTransition: "opacity 0.7s ease-out",
        maskOpacity: "0",
        backgroundUrl: image
      });
    }.bind(this), 50);
  },

  render: function() {
    var style = {
      app: {
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundColor: "black",
        backgroundImage: "url(" + this.state.backgroundUrl + ")"
      },
      mask: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundImage: "url(" + this.state.lastBackgroundUrl + ")",
        backgroundSize: "cover",
        transition: this.state.maskTransition,
        opacity: this.state.maskOpacity
      },
      container: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      author: {
        position: "absolute",
        bottom: 0,
        right: 0,
        fontSize: "12px",
        color: "white",
        padding: "6px",
        background: "rgba(0,0,0,0.3)",
        textDecoration: "none"
      }
    }
    return (
      React.createElement("div", {style: style.app}, 
        React.createElement("div", {id: "mask", style: style.mask}), 
        React.createElement("div", {id: "container", style: style.container}, 
          this.props.children
        ), 
        React.createElement("a", {style: style.author, href: "http://nocturnedevs.com", target: "_blank"}, "By Nocturne")
      )
    )
  }
});