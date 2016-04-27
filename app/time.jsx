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
        WebkitUserSelect: "none"
      }
    };
    return (
      <div style={style.timeBlock}>
        <span>{this.state.time}</span>
      </div>
    );
  }

});
