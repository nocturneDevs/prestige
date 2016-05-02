var Link = React.createClass({
  displayName: "Link",

  getDefaultProps: function() {
    return({
      href: "#",
      text: ""
    });
  },

  render: function() {
    var style = {
      textDecoration: "none",
      color: "rgba(200,200,200,0.8)",
      padding: "5px",
      WebkitAnimation: "fadein 1s"
    }
    return (
      React.createElement("a", {style: style, href: this.props.href, target: "_blank"}, 
        this.props.text
      )
    );
  }

});