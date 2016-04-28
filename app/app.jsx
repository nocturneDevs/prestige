var App = React.createClass({
  displayName: "App",
  render: function() {
    var style = {
      link: {
        textDecoration: "none",
        color: "#ccc",
        opacity: "0.8",
        padding: "5px",
        backgroundImage: "radial-gradient(closest-side at 50% 50% , rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
        WebkitAnimation: "fadein 1s"
      }
    };
    return (
      <Background>
        <WidgetContainer position="hero">
          <TimeDisplay />
        </WidgetContainer>
        <WidgetContainer position="bottomRight">
          <Link href="http://nocturnedevs.com" text="Built by Nocturne" />
        </WidgetContainer>
        <WidgetContainer position="bottomLeft">
          <Link href="https://unsplash.com/" text="Image: Unsplash" />
        </WidgetContainer>
      </Background>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("app"));
