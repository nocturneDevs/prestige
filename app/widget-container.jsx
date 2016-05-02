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
        maxWidth: "100%"
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
    };
    return (
      <div style={style[this.props.position]}>
        {this.props.children}
      </div>
    )
  }
});
