import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import TemplatePage from "views/TemplatePage";

const useStyles = makeStyles(styles);


export default function NotFoundPage(props) {
  const classes = useStyles();
  return (
    <TemplatePage>
      <Parallax small filter image={require("assets/img/landing-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
        </div>
            <div className={classes.container}>
            <GridContainer justify="left">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
              <img src="https://i.imgur.com/qIufhof.png" />
            <div id="info">
                <h3>This page could not be found</h3>
            </div>
              </GridItem>
            </GridContainer>
          </div>
          </div>
    </TemplatePage>
  );
}
