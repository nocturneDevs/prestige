var Link = React.createClass({
  displayName: "Link",

  getDefaultProps: function() {
    return({
      href: "#",
      text: ""
    });
  },

  style: function() {
    this._style = this._style || {
      textDecoration: "none",
      color: "#ccc",
      opacity: "0.8",
      padding: "5px",
      backgroundImage: "radial-gradient(closest-side at 50% 50% , rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
      WebkitAnimation: "fadein 1s"
    };

    return this._style;
  },

  render: function() {
    return (
      <a style={this.style()} href={this.props.href} target="_blank">
        {this.props.text}
      </a>
    );
  }

});
