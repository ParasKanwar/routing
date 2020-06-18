import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Page1 from "./Component/page1";
import Page2 from "./Component/page2";
import Page3 from "./Component/page3";
import "./App.css";

function App() {
  const a = React.createContext();
  return (
    <Fragment>
      <a.Provider value={{ name: "paras" }}>
        <Route path="/" component={Page3}></Route>
        <Switch>
          <Route exact path="/2" component={Page2}></Route>
          <Route exact path="/1" component={Page1}></Route>
        </Switch>
      </a.Provider>
    </Fragment>
  );
}

export default App;
