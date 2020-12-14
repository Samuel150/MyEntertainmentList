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
import NewsDesc from "views/NewsDesc/NewsDesc.js";
import SignUpPage from "views/SignUpPage/SignUpPage.js";
import SearchResults from "views/SearchResults/SearchResults"
import NotFoundPage from "views/NotFoundPage/NotFoundPage.js";
import TopPage from "views/TopPage/TopPage.js";
import FavoritesPage from "views/VisualizarPage/FavoritesPage.js";
import DescriptionPage from "views/DescriptionPage/DescriptionPage.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/mylists" component={MyLists} />
      <Route path="/newslist" component={NewsList} />
      <Route path="/landing" component={LandingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route path="/newsDesc" component={NewsDesc} />
      <Route path="/searchResults" component={SearchResults} />
      <Route path="/about" component={AboutPage} />
      <Route path="/top" component={TopPage} />
      <Route path="/favorites" component={FavoritesPage} />
      <Route path="/description" component={DescriptionPage} />
      <Route exact path="/" component={Components} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
