import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
//import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bganime20.jpg";
import image2 from "assets/img/bgcarrou1.png";
import image3 from "assets/img/bganime22.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                <Link to={"/login-page"} className={classes.link}>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4 className={classes.carrouselCap}>
                      Fate Zero
                    </h4>
                  </div>
                </Link>
                </div>
                <div>
                <Link to={"/login-page"} className={classes.link}>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4  className={classes.carrouselCap}> 
                      Japan Sinks
                    </h4>
                  </div>
                  </Link>
                </div>
                <div>
                <Link to={"/login-page"} className={classes.link}>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption" >
              
                      <h4 className={classes.carrouselCap}>
                        Attack on Titan
                      </h4>
                    
                  </div>
                </Link>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
 
  );
}
