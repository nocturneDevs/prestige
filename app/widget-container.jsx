var WidgetContainer = React.createClass({
  displayName: "WidgetContainer",

  render: function() {
    var style = {
      topLeft: {
        padding: "5px",
        width: "200px",
        maxHeight: "100px",
        position: "absolute",
        top: "0",
        left: "0",
        textAlign: "left"
      },
      topRight: {
        padding: "5px",
        width: "200px",
        maxHeight: "100px",
        position: "absolute",
        top: "0",
        right: "0",
        textAlign: "right"
      },
      hero: {
        fontSize: "8rem",
        fontWeight: "800",
        maxWidth: "100%",
        padding: "2rem",
        backgroundImage: "radial-gradient(closest-side at 50% 50% , rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
        WebkitAnimation: "fadein 2s"
      },
      bottomLeft: {
        padding: "5px",
        width: "200px",
        maxHeight: "100px",
        position: "absolute",
        bottom: "0",
        left: "0",
        textAlign: "left"
      },
      bottomRight: {
        padding: "5px",
        width: "200px",
        maxHeight: "100px",
        position: "absolute",
        bottom: "0",
        right: "0",
        textAlign: "right"
      }
    }
    return (
      <div style={style[this.props.position]}>
        {this.props.children}
      </div>
    )
  }
});
