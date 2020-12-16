import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import TemplatePage from "views/TemplatePage"

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import CreateListSection from "./Sections/CreateListSection.js";
import JoinCommunitySection from "./Sections/JoinCommunitySection.js";


const useStyles = makeStyles(styles);

export default function AboutPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <TemplatePage>
      <Parallax filter image={require("assets/img/bganime10.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>My Anime List</h1>
              <h3>
              La base de datos y la comunidad de anime y manga más grande del mundo
              </h3>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <CreateListSection />
          <JoinCommunitySection />
        </div>
      </div>
    </TemplatePage>
  );
}
