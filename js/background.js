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
    var imageId = parseInt(localStorage.getItem('prestige_next_image'));
    var imageKey = 'prestige_image_' + imageId;
    console.log(imageKey);
    var imageState = localStorage.getItem(imageKey);
    if (imageState === 'ready') {
      localforage.getItem(imageKey, function(err, image) {
        if (err) {
          setTimeout(function() {
            this.loadImage();
          }.bind(this), 2000)
        } else {
          localStorage.setItem('prestige_next_image', (imageId + 1)%5);
          this.setState({backgroundUrl: image});
          localStorage.setItem(imageKey, "used");
        }
      }.bind(this));
    } else {
      setTimeout(function() {
        console.log('attempt');
        this.loadImage();
      }.bind(this), 2000)
    }
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