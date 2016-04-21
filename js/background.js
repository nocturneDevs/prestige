var Background = React.createClass({
  displayName: 'Background',

  getInitialState: function() {
    return {
      backgroundUrl: '/images/transparent.png'
    };
  },

  componentDidMount: function() {
    this.loadImage();
  },

  loadImage: function() {
    var success = function (image) {
      this.setState({backgroundUrl: image});
    }.bind(this);

    var error = function () {
      setTimeout(this.loadImage, 2000)
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
      React.createElement("div", {style: style.app}, 
        this.props.children
      )
    )
  }
});