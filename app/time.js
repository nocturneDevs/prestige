var TimeDisplay = React.createClass({
  displayName: "TimeDisplay",

  getInitialState: function() {
    return({
      time: moment().format("hh:mm:ss")
    });
  },

  getDefaultProps: function() {
    return({
      width: "100%",
      color: "white"
    });
  },

  componentDidMount: function() {
    var that = this;
    var updateTime = function() {
      var newTime = moment().format("hh:mm:ss");
      that.setState({
        time: newTime
      });
    };
    setInterval(updateTime, 100);
  },

  render: function() {
    var style = {
      timeBlock: {
        zIndex: "99",
        padding: "10px",
        width: this.props.width,
        color: this.props.color,
        textAlign: "center",
        cursor: "default",
        WebkitUserSelect: "none"
      }
    };
    return (
      React.createElement("div", {style: style.timeBlock}, 
        React.createElement("h1", null, this.state.time)
      )
    );
  }

});