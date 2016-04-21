var App = React.createClass({
  displayName: "App",
  render: function() {
    return (
      React.createElement(Background, null, 
        React.createElement(WidgetContainer, {position: "hero"}, 
          React.createElement(TimeDisplay, null)
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));