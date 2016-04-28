var App = React.createClass({
  displayName: "App",
  render: function() {
    return (
      React.createElement(Background, null, 
        React.createElement(WidgetContainer, {position: "hero"}, 
          React.createElement(TimeDisplay, null)
        ), 
        React.createElement(WidgetContainer, {position: "bottomRight"}, 
          React.createElement(Link, {href: "http://nocturnedevs.com", text: "Built by Nocturne"})
        ), 
        React.createElement(WidgetContainer, {position: "bottomLeft"}, 
          React.createElement(Link, {href: "https://unsplash.com/", text: "Image: Unsplash"})
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));