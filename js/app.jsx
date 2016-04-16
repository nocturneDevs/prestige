var App = React.createClass({
  displayName: "App",
  render: function() {
    return (
      <Background>
        <WidgetContainer position="hero">
          <TimeDisplay />
        </WidgetContainer>
      </Background>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
