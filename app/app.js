var App = React.createClass({
  displayName: "App",
  render: function() {
    var style = {
      link: {
        textDecoration: "none",
        color: "#ccc",
        opacity: "0.8",
        padding: "5px",
        backgroundImage: "radial-gradient(closest-side at 50% 50% , rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
        WebkitAnimation: "fadein 1s"
      }
    };
    return (
      React.createElement(Background, null, 
        React.createElement(WidgetContainer, {position: "hero"}, 
          React.createElement(TimeDisplay, null)
        ), 
        React.createElement(WidgetContainer, {position: "bottomRight"}, 
          React.createElement("a", {style: style.link, href: "http://nocturnedevs.com", target: "_blank"}, "Built by Nocturne")
        ), 
        React.createElement(WidgetContainer, {position: "bottomLeft"}, 
          React.createElement("a", {style: style.link, href: "https://unsplash.com/", target: "_blank"}, "Image: Unsplash")
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));