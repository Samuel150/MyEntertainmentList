import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components

import TemplatePage from "views/TemplatePage"
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import profile from "assets/img/faces/christian.jpg";
import Small from "components/Typography/Small.js";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import image1 from "assets/img/newDSK.jpg";
import image2 from "assets/img/animeTS.jpg";


const useStyles = makeStyles(styles);

export default function NewsList(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <TemplatePage>

      <Parallax small filter image={require("assets/img/bganimeNews.jpg")} />
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} >
             <h1 className={classes.title}>That Time I Got Reincarnated as a Slime y Kami-tachi ni Hirowareta Otoko colaboran en un corto de anime</h1> 
               <br></br>
              </GridItem>

              <GridItem xs={17} sm={2} md={11}>
                  <h4 className={classes.title} style={{ color: 'grey' }}>Los personajes principales de ambas series se encuentran como slimes</h4>
              </GridItem>

              <GridItem xs={17} sm={2} md={12}>
              <Quote
                   text="December 12, 2020 5:46pm -04"
                   author="A. Trejo Mosquera"
                 />
            </GridItem>
            <GridItem xs={12} sm={12}>
                  <img src = {image1} className={classes.imgRounded} border="10" height="500" width="1100" ></img>
                  <br></br>
                  <br></br>
            </GridItem>

            <GridItem xs={11} sm={12} md={12}>
                <h4>
                La cuenta oficial de Twitter del anime Kami-tachi ni Hirowareta Otoko (By the Grace of the Gods), basado en la serie de novelas ligeras de Roy y Ririnra, subió un corto animado en colaboración con That Time I Got Reincarnated as a Slime. 
                <br></br>
                <br></br>
                En el vídeo se ven a los personajes Ryoma, Elaria y Miya encontrarse con Rimuru Tempest, el slime más poderoso del mundo. El vídeo es parte de la serie de cortos animados Slime-tachi no Idobata Kaigi (Conversaciones entre slimes), que muestra a los personajes de Kami-tachi ni Hirowareta Otoko transformados en slimes. 
                <br></br>
                <br></br>
                El primero de estos cortos de anime se publicó en Twitter el pasado 21 de agosto. 
                <br></br>
                <br></br>
                El anime Kami-tachi ni Hirowareta Otoko se estrenó el pasado 4 de octubre y Funimation lo emitió el mismo día con subtitulos. Takeyuki Yanase (In Another World With My Smartphone, If It’s for My Daughter, I’d Even Defeat a Demon Lord) dirige el anime en Maho Film y Kazuyuki Fudeyasu (Black Clover, Dropkick on My Devil!) es el editor y guionista de la historia. Kaho Deguchi (If It’s for My Daughter, I’d Even Defeat a Demon Lord, Cutie Honey Universe) se encarga del diseño de personaje y sirve en la dirección de animación, con Ririnra recibiendo el crédito por los diseños originales. 
                <br></br>
                <br></br>
                Hiroaki Tsutsumi compone la música en Lantis. Azusa Tadokoro, actriz de la serie, interpreta el opening "Yasashii Sekai" y MindaRyn, una youtuber conocida por sus versiones de otros artistas, interpreta el ending "Blue Rose knows", su primer single.
                <br></br>
                <br></br>
                Por su parte, la segunda temporada de That Time I Got Reincarnated as a Slime se estrenará en Japón el 12 de enero. La primera temporada se estrenó en 2018 y es una adaptación del manga de Taiki Kawakami, a su vez una adaptación de las novelas. 
                <br></br>
                <br></br>
                </h4>

            </GridItem>
            <GridItem xs={13} sm={9}>
                  <img src = {image2} className={classes.imgRounded} border="10" height="500" width="800" ></img>
                  <br></br>
                  <br></br>
            </GridItem>
            <GridItem xs={11} sm={12} md={12}>
                <h4>
                Tensei Shitara Slime Datta Ken también llamado "That Time I Got Reincarnated as a Slime" o TenSura para acortar, es una serie de fantasia que con un total de 25 episodios se transmitió entre octubre de 2018 y marzo de 2019. Siendo una adaptación del manga y novela ligera de mismo nombre escritos por el autor de pseudonimo Fuse, TenSura fue una producción del estudio 8-Bit que contó con la dirección de Yasuhito Kikuchi junto al guion de Kazuyuki Fudeyasu, por su parte Ryouma Ebata y Takahiro Kishida diseñaron los personajes y criaturas para el anime, mientras Jin Aketagawa dirigio el sonido mientras Elements Garden compuso la banda sonora.
                <br></br>
                <br></br>
                La sinopsis de esta serie es la siguiente: Satoru Mikami es un oficinista de 37 años que lleva una tranquila aunque monótona vida, pero cuando muere defendiendo a un amigo del ataque de un ladrón y piensa que es su final, se despierta descubriendo que se ha reencarnado en un mundo de magia y espada como el de cualquier historia de fantasía… pero no a reencarnado como el héroe que salvara el mundo, o al menos con un cuerpo humanoide, sino que ahora existe como un simple slime. Sin embargo, aun cuando su apariencia sea la de una de las criaturas mas débiles el se aprovechara de sus habilidades especiales para asegurarse de disfrutar esta segunda oportunidad de vivir... sin saber que sus actos lo llevaran a ser una leyenda en este nuevo mundo.
                <br></br>
                <br></br>
                </h4>
                <h3><Small>Fuente: ANN</Small></h3>
                <br></br>
                <br></br>
            </GridItem>

              
            </GridContainer>
          </div>
        </div>
      </div>
      </ TemplatePage>
  );
}
