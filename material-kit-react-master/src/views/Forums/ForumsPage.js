import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import TemplatePage from "views/TemplatePage"
import HeaderLinks from "components/Header/HeaderLinks.js";
import MainForumsTable from "./Sections/MainForumsTable.js";
import SecondaryForumsTable from "./Sections/SecondaryForumsTable.js";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function ForumsPage(props) {
  const classes = useStyles();
  return (
    <TemplatePage>
      <Parallax small image={require("assets/img/bganime12.jpg")}>
        <div className={classes.container}>
          <GridContainer >
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Foros</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} style={{display:"flex", paddingLeft:"5%",paddingRight:"5%"}}>
      <GridContainer  justify="center" style={{marginBottom:"30px"}}>
        <MainForumsTable vertical />
        <SecondaryForumsTable vertical />
      </GridContainer>
      </div>

      </ TemplatePage>
  );
}
