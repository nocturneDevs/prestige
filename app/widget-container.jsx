var WidgetContainer = React.createClass({
  displayName: "WidgetContainer",

  style: function(position) {
    this._styles = this._style || {
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

    return this._styles[this.props.position];
  },

  render: function() {
    return (
      <div style={this.style()}>
        {this.props.children}
      </div>
    )
  }
});
