var App = React.createClass({
  displayName: "App",
  render: function() {
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
