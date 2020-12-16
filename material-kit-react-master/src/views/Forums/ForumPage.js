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
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import TemplatePage from "views/TemplatePage"
import HeaderLinks from "components/Header/HeaderLinks.js";
import MainForumsTable from "./Sections/MainForumsTable.js";
import SecondaryForumsTable from "./Sections/SecondaryForumsTable.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import image1 from "assets/img/newsGS.jpg";
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import profile from "assets/img/faces/kendall.jpg";
import profile2 from "assets/img/faces/marc.jpg";

const useStyles = makeStyles(styles);

export default function ForumPage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  return (
    <TemplatePage>
      <Parallax small image={require("assets/img/bgforum.jpg")}>
        <div className={classes.container}>
          <GridContainer >
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Fullmetal Alchemist: Periodo de tiempo</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} style={{display:"flex", paddingLeft:"5%",paddingRight:"5%"}}>
      <GridContainer  justify="center" style={{marginBottom:"30px"}}>
        <GridContainer justify="right">
                <GridItem xs={12} sm={3}style={{marginTop:'20px'}}>
                <img style={{height: "10em"}} src={profile} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={12} sm={9} style={{marginTop:'20px'}}>       
                  <Quote
                   text=""
                   author="Autor: Belén Uribe, 2020/03/10"
                   
                 />
                 <Muted>
                 Actualmente estoy viendo la serie de 2003 de Fullmetal, luego estaré mirando en Brotherhood, y algo me hace cuestionar, así que si alguien lo sabe, hágamelo saber. Entonces, Fullmetal tiene lugar a principios del siglo XX, pero ¿es ese siglo en el pasado o en el futuro? Cuando Izumi le cuenta a Ed sobre la carta de amor que su padre le dirigió a Dante, ella le dice que la fecha se basa en el nacimiento de Cristo y que "el sistema de datación ya no se usa y se deriva de una religión antigua que no se ha practicado en siglos. "pero también dice que la fecha de la carta fue hace 400 años. Entonces, ¿implica que el cristianismo se extinguió muy temprano o que el mundo la jodió y comenzó uno nuevo? Entonces, ¿es realmente el pasado o el futuro?
                 </Muted>
                  
                </GridItem>
              </GridContainer>
              <GridContainer justify="right">
                <GridItem xs={12} sm={3}style={{marginTop:'20px'}}>
                <img style={{height: "10em"}} src={profile2} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={12} sm={9} style={{marginTop:'20px'}}>       
                  <Quote
                   text=""
                   author="Autor: Adrian Archondo, 2020/03/15"
                   
                 />
                 <Muted>
                 Fullmetal Alchemist no tiene lugar en nuestro mundo. Básicamente es una línea de tiempo diferente. No quiero decir mucho sobre esto, porque será importante más adelante en el anime y verás lo que quiero decir.
                 </Muted>
                  
                </GridItem>
              </GridContainer>
              <div style={{display:'flex', width: '100%'}}>
                <div style={{marginLeft:'auto'}}>
                  <div style={{marginBottom:'20px'}}>
                    <CustomInput labelText="Respuesta"/>
                  </div>
                  <Button simple >Publicar</Button>
                </div>
              </div>
      </GridContainer>
      </div>

      </ TemplatePage>
  );
}
