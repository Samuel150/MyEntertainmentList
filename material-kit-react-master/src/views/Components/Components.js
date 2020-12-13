import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";

import image1 from "assets/img/bganime20.jpg";
import image2 from "assets/img/bgcarrou1.png";
import image3 from "assets/img/bgpromised.jpg";
const useStyles = makeStyles(styles);
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  } 
};

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax  image={require("assets/img/bganime17.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem >
              <div className={classes.brand}>
                <h1 className={classes.title}>My Anime List</h1>
                <h3 className={classes.subtitle}>
                  The world's largest anime and manga database and community
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        
        <div className={classes.container} >
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} >
            <Link to={"/login-page"} className={classes.link}>
              <h2 className={classes.titleCarousel}>Top Anime</h2>
              </Link>
              <div align="center">
              <SectionCarousel />
              </div>
              
            </GridItem>
         </GridContainer>
        </div>

        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <Link to={"/login-page"} className={classes.link}>
              <h2 className={classes.titleCarousel}>Popular Anime</h2>
              </Link>
              <Carousel itemClass="carousel-item-padding-40-px" infinite={true} responsive={responsive}>
              <div>
              <img src={image1} height="400" width="550" />
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> Fate Zero </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
             
              <div>
              <img src={image2} height="400" width="550" />
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}>Japan Sinks </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>

              <div>
              <img src={image3} height="400" width="550" />
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> The Promised Neverland </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>

              <div>
              <img src={image1} height="400" width="700" />
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> Fate Zero </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
              </Carousel>;
              
            </GridItem>
         </GridContainer>
        </div>

        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <Link to={"/login-page"} className={classes.link}>
              <h2 className={classes.titleCarousel}>Recomended Anime</h2>
              </Link>
              <Carousel itemClass="carousel-item-padding-40-px" infinite={true} responsive={responsive}>
              <div>
              <img src={image1} height="400" width="550" />
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> Fate Zero </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
             
              <div>
              <img src={image2} height="400" width="550" />
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}>Japan Sinks </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>

              <div>
              <img src={image3} height="400" width="550" />
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> The Promised Neverland </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>

              <div>
              <img src={image1} height="400" width="700" />
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> Fate Zero </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
              </Carousel>;
              
            </GridItem>
         </GridContainer>
        </div>

        
      </div>
      <Footer />
    </div>
  );
}
/*<SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />*/