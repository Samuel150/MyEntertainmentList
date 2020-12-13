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


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
<<<<<<< HEAD
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/mylists-page" component={MyLists} />
      <Route path="/newslist-page" component={NewsList} />
      <Route path="/signup-page" component={SignUpPage} />

      <Route path="/" component={Components} />
=======
      <Route path="/landing" component={LandingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route exact path="/" component={Components} />
      <Route component={NotFoundPage} />
>>>>>>> f3c638d1a3d14a14fa118dae325126401013abf4
    </Switch>
  </Router>,
  document.getElementById("root")
);
