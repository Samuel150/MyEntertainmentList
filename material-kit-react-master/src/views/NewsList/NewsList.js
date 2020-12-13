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

import image1 from "assets/img/newsGS.jpg";
import image2 from "assets/img/newsSK.jpg";
import image3 from "assets/img/newsEK.jpg";
import image4 from "assets/img/newsOP.jpg";
import image5 from "assets/img/newsYK.jpg";
import image6 from "assets/img/newsCR.jpg";

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
    <div>
      <Header
        color="transparent"
        brand="My Anime List"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />


      <Parallax small filter image={require("assets/img/bganimeNews.jpg")} />
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} >
               <h2 className={classes.titleCarousel}>Últimas Noticias </h2>  
              </GridItem>

              <GridItem >
              <GridContainer justify="right">
                <GridItem xs={12} sm={3}>
                  <img src = {image1} className={classes.imgRounded} border="10" height="250" width="250" ></img>
                </GridItem>
                <GridItem xs={12} sm={9}>
                <Link to={"/login-page"}><h3 className={classes.title}>GRAND SUMMONERS forma equipo con Re:ZERO para un enorme crossover</h3></Link>
                  

                  <Quote
                   text=""
                   author="Autor: S. Vacal, hace 2 días"
                 />
                 <Muted>
                 Es hora de otro poderoso crossover de GRAND SUMMONERS, ¡esta vez en forma de emocionante colaboración con  Re:ZERO -Starting Life in Another World-! Te dejamos todos los detalles.
                 </Muted>
                  
                </GridItem>
              </GridContainer>
              <br></br>
              <br></br>
              </GridItem>
              
              <GridItem >
              <GridContainer justify="right">
                <GridItem xs={12} sm={3}>
                  <img src = {image2} className={classes.imgRounded} border="10" height="250" width="250" ></img>
                </GridItem>
                <GridItem xs={12} sm={9}>
                  <h3 className={classes.title}>That Time I Got Reincarnated as a Slime y Kami-tachi ni Hirowareta Otoko colaboran en un corto de anime</h3>

                  <Quote
                   text=""
                   author="Autor: A. Trejo Mosquera hace un día "
                 />
                 <Muted>
                 La cuenta oficial de Twitter del anime Kami-tachi ni Hirowareta Otoko (By the Grace of the Gods), basado en la serie de novelas ligeras de Roy y Ririnra, subió un corto animado en colaboración con That Time I Got Reincarnated as a Slime. 
                 </Muted>
                  
                </GridItem>
              </GridContainer>
              <br></br>
              <br></br>
              </GridItem>

              <GridItem >
              <GridContainer justify="right">
                <GridItem xs={12} sm={3}>
                  <img src = {image3} className={classes.imgRounded} border="10" height="250" width="250" ></img>
                </GridItem>
                <GridItem xs={12} sm={9}>
                  <h3 className={classes.title}>El anime Kakushigoto tendrá una película recopilatoria</h3>

                  <Quote
                   text=""
                   author="Autor: A. Trejo Mosquera hace un día"
                 />
                 <Muted>
                 Este sábado, durante el "Kakushigoto Special Event", se anunció que el anime Kakushigoto, basado en el manga del mismo nombre de Koji Kumeta, tendrá una película recopilatoria. El equipo de producción prometió que las personas que no hayan visto la serie y quienes sí lo han visto podrán disfrutar la película por igual. 
                 </Muted>
                  
                </GridItem>
              </GridContainer>
              <br></br>
              <br></br>
              </GridItem>

              <GridItem >
              <GridContainer justify="right">
                <GridItem xs={12} sm={3}>
                  <img src = {image4} className={classes.imgRounded} border="10" height="250" width="250" ></img>
                </GridItem>
                <GridItem xs={12} sm={9}>
                  <h3 className={classes.title}>One Piece: Pirate Warriors 4 nos deja un tráiler dedicado a Okiku</h3>

                  <Quote
                   text=""
                   author="Autor: S. Vacal, hace un días"
                 />
                 <Muted>
                 Bandai Namco ha mostrado un primer tráiler del que será el octavo personaje DLC de One Piece: Pirate Warriors 4, Okiku, quien formará parte junto a Kin'emon y Kazuki Oden del "Pack del País de Wano" que se lanzará en invierno.                 </Muted>
                  
                </GridItem>
              </GridContainer>
              <br></br>
              <br></br>
              </GridItem>

              <GridItem >
              <GridContainer justify="right">
                <GridItem xs={12} sm={3}>
                  <img src = {image5} className={classes.imgRounded} border="10" height="250" width="250" ></img>
                </GridItem>
                <GridItem xs={12} sm={9}>
                  <h3 className={classes.title}>The Yakuza Remastered Collection y Yakuza 6: The Song of Life llegarán en 2021 a Xbox One y PC</h3>

                  <Quote
                   text=""
                   author="Autor: A. Trejo Mosquera , hace 2 días"
                 />
                 <Muted>
                 Desde Sega y la desarrolladora Ryu Ga Gotoku Studio han anunciado que The Yakuza Remastered Collection llegará a Xbox One y PC vía Steam y la Microsoft Store el próximo 28 de enero de 2021, siguiéndole Yakuza 6: The Song of Life el 25 de marzo de 2021.                 </Muted>
                  
                </GridItem>
              </GridContainer>
              <br></br>
              <br></br>
              </GridItem>

              <GridItem >
              <GridContainer justify="right">
                <GridItem xs={12} sm={3}>
                  <img src = {image6} className={classes.imgRounded} border="10" height="250" width="250" ></img>
                </GridItem>
                <GridItem xs={12} sm={9}>
                  <h3 className={classes.title}>Crunchyroll lanza una serie limitada de camisetas para que aumentes tu nivel de otaku</h3>

                  <Quote
                   text=""
                   author="Autor: S. Vacal, hace 3 días"
                 />
                 <Muted>
                 La vida del otaku es una vida de compromiso, y a veces no basta con serlo, ¡hay que dejar claro al mundo que lo eres! ¿Y qué mejor forma de declarar tu afición a los demás que con una camiseta? Pues hoy Crunchyroll anuncia el lanzamiento de una serie de camisetas de edición limitada para Colombia, ¡ya disponibles en varias tiendas del país!                  </Muted>
                  
                </GridItem>
              </GridContainer>
              <br></br>
              <br></br>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
