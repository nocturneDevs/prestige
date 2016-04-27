var TimeDisplay = React.createClass({
  displayName: "TimeDisplay",

  getInitialState: function() {
    return({
      time: moment().format("HH:mm:ss")
    });
  },

  getDefaultProps: function() {
    return({
      width: "100%",
      color: "white"
    });
  },

  componentDidMount: function() {
    var updateTime = function() {
      var newTime = moment().format("HH:mm:ss");
      this.setState({time: newTime});
    }.bind(this);
    setInterval(updateTime, 100);
  },

  render: function() {
    var style = {
      timeBlock: {
        zIndex: "99",
        padding: "10px",
        width: this.props.width,
        color: this.props.color,
        fontSize: "inherit",
        textAlign: "center",
        cursor: "default",
        WebkitUserSelect: "none",
        fontFamily: "Open Sans",
        fontSize: "7rem",
        backgroundImage: "radial-gradient(closest-side at 50% 50% , rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)"
      }
    };
    return (
      React.createElement("div", {style: style.timeBlock}, 
        React.createElement("span", null, this.state.time)
      )
    );
  }

});