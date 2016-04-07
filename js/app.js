var App = React.createClass({
  displayName: 'App',
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
        "New tab"
      )
    )
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));