var AppBackground = React.createClass({
  displayName: 'AppBackground',
  render: function() {
    var style = {
      app: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundImage: 'url(https://source.unsplash.com/random/2880x1800)'
      }
    }
    return (
      React.createElement("div", {style: style.app}, 
        this.props.children
      )
    )
  }
});

var App = React.createClass({
  displayName: "App",
  render: function() {
    return (
      React.createElement(AppBackground, null, 
        React.createElement(TimeDisplay, null)
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));