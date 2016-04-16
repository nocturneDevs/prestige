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
      React.createElement("div", {style: style[this.props.position]}, 
        this.props.children
      )
    )
  }
});