import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Alarm from "@material-ui/icons/Alarm";
import BlockRounded from "@material-ui/icons/BlockRounded";
import Done from "@material-ui/icons/Done";
import Visibility from "@material-ui/icons/Visibility";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import image from "assets/img/bgpromised.jpg";
import image1 from "assets/img/bganime20.jpg";
import image2 from "assets/img/bgcarrou1.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import TemplatePage from "views/TemplatePage";

const useStyles = makeStyles(styles);


export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  return (
    <TemplatePage>
      <Parallax small filter image={require("assets/img/bganime15.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="left">
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.profile}>
                  <div>
                    <img style={{height: "10em"}} src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Samuel Huanca</h3>
                  </div>
                    <Button color="orange" href="mylists"><h4 className={classes.buttonText}>Mi Lista Anime</h4></Button>
                    
                </div>
              </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.titleProf}>Estadísticas de visualización</h2>
                    <hr></hr>
                    <div >
                    <h3 className={classes.leftcap}>Días: &nbsp;37.1</h3>
                    <h3 className={classes.rightcap}> Puntaje Medio: &nbsp;7.66 </h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <GridContainer justify="right">
                      <GridItem xs={12} sm={12} md={12}>
                      <h3 className={classes.leftlist}><Done/> &nbsp;Anime Vistos</h3>
                      <h3 className={classes.rightlist}>45</h3>
                      </GridItem>
                    </GridContainer>
                    <GridContainer justify="left">
                      <GridItem xs={12} sm={12} md={12}>
                      <h3 className={classes.leftlist}><Favorite/> &nbsp;Anime Favoritos</h3>
                      <h3 className={classes.rightlist}>2</h3>
                      </GridItem>
                    </GridContainer>
                    <GridContainer justify="left">
                      <GridItem xs={12} sm={12} md={12}>
                      <h3 className={classes.leftlist}><Alarm/> &nbsp;Planeo de ver</h3>
                      <h3 className={classes.rightlist}>3</h3>
                      </GridItem>
                    </GridContainer>
                    <GridContainer justify="left">
                      <GridItem xs={12} sm={12} md={12}>
                      <h3 className={classes.leftlist}><Visibility/> &nbsp;Estoy Viendo</h3>
                      <h3 className={classes.rightlist}>2</h3>
                      </GridItem>
                    </GridContainer>
                    </div>      
                </GridItem> 
            </GridContainer>
          </div>
        </div>
            <div className={classes.container}>
            <GridContainer justify="left">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="orange"
                  tabs={[
                    {
                      tabButton: "Watching",
                      tabIcon: Visibility,
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
                              <p>Ambientada en el año 2045, Emma es una huérfana de 11 años que vive en Grace Field House.</p>
                              
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
                              <p>La historia de Fate / Zero tiene lugar diez años antes de los eventos de Fate / stay night, detallando los eventos de la Cuarta Guerra del Santo Grial en la ciudad de Fuyuki.</p>
                              
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
                              <p>Una adaptación de la serie de anime net animation (ONA) original de la novela Japan Sinks</p>
                              
                            </CardBody>
                          </Card>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Plan to watch",
                      tabIcon: Alarm,
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
                              <p>Una adaptación de la serie de anime net animation (ONA) original de la novela Japan Sinks</p>
                              
                            </CardBody>
                          </Card>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorites",
                      tabIcon: Favorite,
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
                              <p>Ambientada en el año 2045, Emma es una huérfana de 11 años que vive en Grace Field House.</p>
                              
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
                              <p>La historia de Fate / Zero tiene lugar diez años antes de los eventos de Fate / stay night, detallando los eventos de la Cuarta Guerra del Santo Grial en la ciudad de Fuyuki.</p>
                              
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
    </TemplatePage>
  );
}
