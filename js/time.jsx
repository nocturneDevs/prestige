console.log("time");

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
      <div style={style.timeBlock}>
        <h1> {this.state.time} </h1>
      </div>
    );
  }

});
