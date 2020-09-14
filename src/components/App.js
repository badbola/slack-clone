import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { SignIn } from "./";

function change() {
  return <div>Changed</div>;
}
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/changed" component={change} />
        </Switch>
      </div>
    );
  }
}

export default App;
