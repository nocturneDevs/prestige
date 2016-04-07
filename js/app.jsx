var AppBackground = React.createClass({
  displayName: 'AppBackground',
  render: function() {
    var style = {
      app: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundImage: 'url(https://source.unsplash.com/random/2880x1800)'
      }
    }
    return (
      <div style={style.app}>
        {this.props.children}
      </div>
    )
  }
});

var App = React.createClass({
  displayName: "App",
  render: function() {
    return (
      <AppBackground>
        <TimeDisplay />
      </AppBackground>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
