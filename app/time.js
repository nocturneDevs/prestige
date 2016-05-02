var TimeDisplay = React.createClass({
  displayName: "TimeDisplay",

  getInitialState: function() {
    return({
      time: moment().format(this.props.format)
    });
  },

  getDefaultProps: function() {
    return({
      width: "100%",
      color: "white",
      format: "HH:mm:ss"
    });
  },

  componentDidMount: function() {
    var updateTime = function() {
      var newTime = moment().format(this.props.format);
      this.setState({time: newTime});
    }.bind(this);
    setInterval(updateTime, 100);
  },

  render: function() {
    var style = {
      zIndex: "99",
      padding: "10px",
      width: this.props.width,
      color: this.props.color,
      fontSize: "inherit",
      textAlign: "center",
      cursor: "default",
      WebkitUserSelect: "none",
      fontFamily: "Helvetica, sans-serif",
      fontSize: "7rem",
      backgroundImage: "radial-gradient(closest-side at 50% 50% , rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
      WebkitAnimation: "fadein 2s"
    };
    return (
      React.createElement("div", {style: style}, 
        React.createElement("span", null, this.state.time)
      )
    );
  }

});