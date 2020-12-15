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
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import TemplatePage from "views/TemplatePage"
import imagenoticia from "assets/img/newsGS.jpg";
import imagenoticia2 from "assets/img/newsSK.jpg";
import image1 from "assets/img/bganime20.jpg";
import image2 from "assets/img/bgcarrou1.png";
import image3 from "assets/img/bgpromised.jpg";
import image10 from "assets/img/portFMA.jpg";
import image11 from "assets/img/portGL.jpg";
import image12 from "assets/img/portSNK.jpg";
import image13 from "assets/img/portOP.jpg";
const useStyles = makeStyles(styles);
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  } 
};

export default function Components(props) {
  const classes = useStyles();
  return (

    <TemplatePage>
      <Parallax image={require("assets/img/bganime17.jpg")}>

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
              <h2 className={classes.titleCarousel}>Animes más populares</h2>
              <h3 className={classes.subtitle2}>
                  Los animes más populares de esta temporada te esperan
                </h3>
              </Link>
              <SectionCarousel />      
            </GridItem>
         </GridContainer>
        </div>

        <div className={classes.container}>
          
            <GridItem xs={12} sm={12} md={12}>
            <Link to={"/login-page"} className={classes.link}>
              <h2 className={classes.titleCarousel}>Top Anime</h2>
              <h3 className={classes.subtitle2}>
                  Los animes mejor puntuados de todos los tiempos
                </h3>
                <br></br>
              </Link>
              <Carousel itemClass="carousel-item-padding-40-px" infinite={true} responsive={responsive}>
              
              <GridItem xs={12} sm={12} md={12}>
              <div>
              <img src={image10} height="100%" width="100%" alt=""
          className={classes.imgRounded + " " + classes.imgFluid} />
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> Fate Zero </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <div>
              <img src={image11} height="100%" width="100%" alt=""
          className={classes.imgRounded + " " + classes.imgFluid}/>
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}>Japan Sinks </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <div>
              <img src={image12} height="100%" width="100%" alt=""
          className={classes.imgRounded + " " + classes.imgFluid}/>
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> The Promised Neverland </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <div>
              <img src={image13} height="100%" width="100%" alt=""
          className={classes.imgRounded + " " + classes.imgFluid}/>
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> Fate Zero </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
              </GridItem>
              </Carousel>
              
            </GridItem>
         
        </div>

        <div className={classes.container}>
          
            <GridItem xs={12} sm={12} md={12}>
            <Link to={"/login-page"} className={classes.link}>
              <h2 className={classes.titleCarousel}>Top Anime</h2>
              <h3 className={classes.subtitle2}>
                  Los animes mejor puntuados de todos los tiempos
                </h3>
                <br></br>
              </Link>
              <Carousel itemClass="carousel-item-padding-40-px" infinite={true} responsive={responsive}>
              
              <GridItem xs={12} sm={12} md={12}>
              <div>
              <img src={image10} height="100%" width="100%" alt=""
          className={classes.imgRounded + " " + classes.imgFluid} />
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> Fate Zero </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <div>
              <img src={image11} height="100%" width="100%" alt=""
          className={classes.imgRounded + " " + classes.imgFluid}/>
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}>Japan Sinks </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <div>
              <img src={image12} height="100%" width="100%" alt=""
          className={classes.imgRounded + " " + classes.imgFluid}/>
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> The Promised Neverland </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <div>
              <img src={image13} height="100%" width="100%" alt=""
          className={classes.imgRounded + " " + classes.imgFluid}/>
              <Link to={"/login-page"} className={classes.link}>
              <div className="slick-caption">
                <h3 className={classes.leftcap}> Fate Zero </h3>
                <h3 className={classes.rightcap}> 10 </h3>
              </div>
              </Link>
              </div>
              </GridItem>
              </Carousel>
              
            </GridItem>
         
        </div>


          <div className={classes.container}>
          <Link to={"/newslist"} className={classes.link}>
              <h2 className={classes.titleCarousel}>Noticias más recientes</h2>
              <br></br>
          </Link>
          <GridContainer justify="center">
            <GridItem >
            <GridContainer justify="right">
                <GridItem xs={12} sm={3}>
                  <img src = {imagenoticia} className={classes.imgRounded} border="10" height="200" width="200" ></img>
                </GridItem>
                <GridItem xs={12} sm={9}>
                <Link to={"/newsDesc"}><h3 className={classes.title2}>GRAND SUMMONERS forma equipo con Re:ZERO para un enorme crossover</h3></Link>
                  <Quote
                   text=""
                   author="Autor: S. Vacal, hace 2 días"
                 />
                  <Link to={"/newsDesc"}><h4 className={classes.title3}>Ver más +</h4></Link>
                 <br></br>
                <br></br>
                </GridItem>
              </GridContainer>
              </GridItem>
              <GridItem >
              <GridContainer justify="right">
                <GridItem xs={12} sm={3}>
                  <img src = {imagenoticia2} className={classes.imgRounded} border="10" height="200" width="200" ></img>
                </GridItem>
                <GridItem xs={12} sm={9}>
                <Link to={"/newsDesc"}><h3 className={classes.title2}>That Time I Got Reincarnated as a Slime y Kami-tachi ni Hirowareta Otoko colaboran en un corto de anime</h3></Link>

                  <Quote
                   text=""
                   author="Autor: A. Trejo Mosquera hace un día "
                 />
                 <Link to={"/newsDesc"}><h4 className={classes.title3}>Ver más +</h4></Link>
                  
                </GridItem>
              </GridContainer>
              <br></br>
              <br></br>
              </GridItem>
              </GridContainer>
          </div>

        
      </div>
    </TemplatePage>
  );
}
