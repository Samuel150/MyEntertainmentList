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

import picture from "assets/img/fullmetalalchemist.png"

import NavPills from "components/NavPills/NavPills.js";
import TemplatePage from "views/TemplatePage";


const useStyles = makeStyles(styles);

export default function MyLists(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  return (
    <TemplatePage>
        <Parallax image={require("assets/img/fullmetal_banner.jpg")}>
            <div className={classes.container}>
            <GridContainer >
                <GridItem>
                <div className={classes.brand}>
                    <h1 className={classes.title}></h1>

                </div>
                </GridItem>
            </GridContainer>
            </div>
        </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
                <br></br>
            <h1 className={classes.title}>Full-Metal Alchemist: Brotherhood</h1>
            <br></br>
            <GridContainer justify="left">
                <GridItem xs={12} sm={12} md={4}>
                <div className={classes.profile}>
                    <Card style={{width: "20rem"}}>
                            <img
                              style={{height: "100%", width: "100%", display: "block"}}
                              className={classes.imgCardTop}
                              src={picture}
                              alt="Card-img-cap"
                            />
                            <CardBody>
                              <h4 className={classes.cardTitle}><b>Titulos alternativos</b> &emsp;</h4>
                              <p><b>English: </b>Fullmetal Alchemist: Brotherhood</p>
                              <p><b>Japanese: </b>鋼の錬金術師 FULLMETAL ALCHEMIST</p>
                              <br></br>
                              <h4 className={classes.cardTitle}><b>Informacion</b> &emsp;</h4>
                              <p><b>Tipo: </b>TV</p>
                              <p><b>Episodios: </b>64</p>
                              <p><b>Estado: </b>Emision terminada</p>
                              <p><b>Emision: </b>Apr 5, 2009 - Jul 4, 2010</p>
                              <p><b>Productores: </b>Aniplex, Square Enix, Mainichi Broadcasting System, Studio Moriken</p>
                              <p><b>Generos: </b>Accion, Militar, Aventura, Comedia, Drama, Magia, Fantasia, Shounen</p>
                              <p><b>Licencias: </b>Funimation, Aniplex of America</p>
                              
                            </CardBody>
                          </Card>
                </div>
                </GridItem>
                <GridItem xs={8} sm={8} md={8}>
                <GridContainer justify="left">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="orange"
                  tabs={[
                    {
                      tabButton: "Detalles",
                      tabContent: (
                          <div>
                              <p><b>Synopsis</b></p>
                                <br></br>
                                <p>"In order for something to be obtained, something of equal value must be lost."

Alchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called "automail" and become a state alchemist, the Fullmetal Alchemist.

Three years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.</p>
                          </div>
                      )
                    },
                    {
                      tabButton: "Episodios",
                      tabContent: (
                        <p></p>
                      )
                    },
                    {
                      tabButton: "Reviews",
                      tabContent: (
                        <p></p>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
                </GridItem> 
            </GridContainer>
          
          </div>
      </div>
    </TemplatePage>
  );
}
