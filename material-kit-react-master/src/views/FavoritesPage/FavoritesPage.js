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
import HeaderLinks from "components/Header/HeaderLinks.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import BlockRounded from "@material-ui/icons/BlockRounded";

import image from "assets/img/bgpromised.jpg";
import image1 from "assets/img/bganime20.jpg";
import image2 from "assets/img/bgcarrou1.png";

import NavPills from "components/NavPills/NavPills.js";


const useStyles = makeStyles(styles);

export default function MyLists(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="My Anime List"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bganime10.jpg")}>
        <div className={classes.container}>
          <GridContainer >
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Anime de Accion</h1>
                <h3 className={classes.subtitle}>
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
            <GridContainer justify="left">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="orange"
                  tabs={[
                    {
                      tabButton: "Top",
                      tabContent: (
                        <GridContainer justify="left">
                          <GridItem xs={12} sm={12} md={4}>
                          <Card style={{width: "20rem"}}>
                            <img
                              style={{height: "150px", width: "100%", display: "block"}}
                              className={classes.imgCardTop}
                              src={image}
                              alt="Card-img-cap"
                            />
                            <CardBody>
                              <h4 className={classes.cardTitle}>The Promised Neverland &emsp; <BlockRounded style={{color: "#D76437" }}/></h4>
                              <p>Set in the year 2045, Emma is an 11-year-old orphan living in Grace Field House</p>
                              
                            </CardBody>
                          </Card>
                            
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <Card style={{width: "20rem"}}>
                            <img
                              style={{height: "150px", width: "100%", display: "block"}}
                              className={classes.imgCardTop}
                              src={image1}
                              alt="Card-img-cap"
                            />
                            <CardBody>
                              <h4 className={classes.cardTitle}>Fate Zero &emsp; <BlockRounded style={{color: "#D76437" }}/></h4>
                              <p>The story of Fate/Zero takes place ten years prior to the events of Fate/stay night, detailing the events of the Fourth Holy Grail War in Fuyuki City</p>
                              
                            </CardBody>
                          </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <Card style={{width: "20rem"}}>
                            <img
                              style={{height: "150px", width: "100%", display: "block"}}
                              className={classes.imgCardTop}
                              src={image2}
                              alt="Card-img-cap"
                            />
                            <CardBody>
                              <h4 className={classes.cardTitle}>Japan Sinks &emsp; <BlockRounded style={{color: "#D76437" }}/></h4>
                              <p>An original net animation (ONA) anime series adaptation of the novel Japan Sinks</p>
                              
                            </CardBody>
                          </Card>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "En emision",
                      tabContent: (
                        <GridContainer justify="left">
                          
                          <GridItem xs={12} sm={12} md={4}>
                          <Card style={{width: "20rem"}}>
                            <img
                              style={{height: "150px", width: "100%", display: "block"}}
                              className={classes.imgCardTop}
                              src={image2}
                              alt="Card-img-cap"
                            />
                            <CardBody>
                              <h4 className={classes.cardTitle}>Japan Sinks &emsp; <BlockRounded style={{color: "#D76437" }}/></h4>
                              <p>An original net animation (ONA) anime series adaptation of the novel Japan Sinks</p>
                              
                            </CardBody>
                          </Card>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Mas populares",
                      tabContent: (
                        <GridContainer justify="left">
                          <GridItem xs={12} sm={12} md={4}>
                          <Card style={{width: "20rem"}}>
                            <img
                              style={{height: "150px", width: "100%", display: "block"}}
                              className={classes.imgCardTop}
                              src={image}
                              alt="Card-img-cap"
                            />
                            <CardBody>
                              <h4 className={classes.cardTitle}>The Promised Neverland &emsp; <BlockRounded style={{color: "#D76437" }}/></h4>
                              <p>Set in the year 2045, Emma is an 11-year-old orphan living in Grace Field House</p>
                              
                            </CardBody>
                          </Card>
                            
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <Card style={{width: "20rem"}}>
                            <img
                              style={{height: "150px", width: "100%", display: "block"}}
                              className={classes.imgCardTop}
                              src={image1}
                              alt="Card-img-cap"
                            />
                            <CardBody>
                              <h4 className={classes.cardTitle}>Fate Zero &emsp; <BlockRounded style={{color: "#D76437" }}/></h4>
                              <p>The story of Fate/Zero takes place ten years prior to the events of Fate/stay night, detailing the events of the Fourth Holy Grail War in Fuyuki City</p>
                              
                            </CardBody>
                          </Card>
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          
          </div>
      </div>
      <Footer />
    </div>
  );
}
