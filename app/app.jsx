var App = React.createClass({
  displayName: "App",
  render: function() {
    var style = {
      link: {
        textDecoration: "none",
        color: "#ccc",
        opacity: "0.8",
        padding: "5px",
        backgroundImage: "radial-gradient(closest-side at 50% 50% , rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)"
      }
    };
    return (
      <Background>
        <WidgetContainer position="hero">
          <TimeDisplay />
        </WidgetContainer>
        <WidgetContainer position="bottomRight">
          <a style={style.link} href="http://nocturnedevs.com" target="_blank">Built by Nocturne</a>
        </WidgetContainer>
        <WidgetContainer position="bottomLeft">
          <a style={style.link} href="https://unsplash.com/" target="_blank">Image: Unsplash</a>
        </WidgetContainer>
      </Background>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
