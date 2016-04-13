console.log("time");

var TimeDisplay = React.createClass({
  displayName: "TimeDisplay",

  getInitialState: function() {
    return({
      time: "00:00:00"
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
    var blah = function() {
      var newTime = moment().format("hh:mm:ss")
      that.setState({
        time: newTime
      });
    };
    setInterval(blah, 100);
  },

  render: function() {
    var style = {
      timeBlock: {
        zIndex: "99",
        padding: "10px",
        width: this.props.width,
        color: this.props.color,
        textAlign: "center"
      }
    };
    return (
      React.createElement("div", {style: style.timeBlock}, 
        React.createElement("h1", null, " ", this.state.time, " ")
      )
    );
  }

});