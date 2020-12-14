import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import MyLists from "views/MyLists/MyLists.js";
import NewsList from "views/NewsList/NewsList.js";
import SignUpPage from "views/SignUpPage/SignUpPage.js";
import NotFoundPage from "views/NotFoundPage/NotFoundPage.js";
import TopPage from "views/TopPage/TopPage.js";
import VisualizarPage from "views/VisualizarPage/VIsualizarPage.js";
import DescriptionPage from "views/DescriptionPage/DescriptionPage.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/mylists-page" component={MyLists} />
      <Route path="/newslist-page" component={NewsList} />
      <Route path="/signup-page" component={SignUpPage} />
      <Route path="/top-page" component={TopPage} />
      <Route path="/visualizar-page" component={VisualizarPage} />
      <Route path="/description-page" component={DescriptionPage} />

      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
