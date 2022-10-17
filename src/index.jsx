import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/:questionNumber">
          <Home />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
