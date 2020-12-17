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
import TemplatePage from "views/TemplatePage";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Tables from "./Sections/Tables.js";
/*import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
*/
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function MyLists(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <TemplatePage>
      <Parallax image={require("assets/img/bganime23.jpg")}>
        <div className={classes.container}>
          <GridContainer >
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Top Anime</h1>
                <h3 className={classes.subtitle}>
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div style={{textAlign: "center", marginRight: "5%"}} className={classNames(classes.main, classes.mainRaised)}>
        <Tables />
      </div>
    </TemplatePage>
  );
}
