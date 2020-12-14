import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SearchResults() {
  const classes = useStyles();
  var buscar = false;
  const resultados = [
    {
      title: "One Punch Man",
      description: "El aparentemente ordinario y poco impresionante Saitama tiene un pasatiempo bastante único: ser un héroe. Para perseguir su sueño de la infancia, entrenó sin descanso durante tres años y perdió todo su cabello en el ...",
      image: "./portadaSeries/OnePunchMan.jpg",
      studios: "Madhouse",
      episodes: 12,
      tipo: "Serie"
    },
    {
      title: "Punch Line",
      description: "Después de escapar de un secuestro de autobús con la ayuda del superhéroe enmascarado Strange Juice, Yuuta Iridatsu encuentra su alma separada de su cuerpo y al cuidado de un espíritu gato perverso, Chiranosuke. Como espíritu ...",
      image: "./portadaSeries/PunchLine.jpg",
      studios: "MAPPA",
      episodes: 12,
      tipo: "Serie"
    },
    {
      title: "Sweat Punch",
      description: "Sweat Punch es una serie de cinco cortos de Studio 4 ° C recopilados como un paquete de película directo a DVD titulado Deep Imagination.",
      image: "./portadaSeries/SweatPunch.jpg",
      studios: "Studio 4°C",
      episodes: 5,
      tipo: "OVA"
    },
    {
      title: "One Punch Man 2",
      description: "Después de derrotar a Boros y su poderoso ejército, Saitama ha regresado a su vida cotidiana sin complicaciones en Z-City. Sin embargo, sin que él lo supiera, el número de monstruos que aparecen sigue siendo continuo ...",
      image: "./portadaSeries/OnePunchMan2.jpg",
      studios: "Madhouse",
      episodes: 12,
      tipo: "Serie"
    },
    {
      title: "Death Note",
      description: "Un shinigami, como dios de la muerte, puede matar a cualquier persona, siempre que vea el rostro de su víctima y escriba el nombre de su víctima en un cuaderno llamado Death Note. Un día, Ryuk, aburrido por el estilo de vida shinigami ...",
      image: "./portadaSeries/DeathNote.jpg",
      studios: "Madhouse",
      episodes: 12,
      tipo: "Serie"
    },
    {
      title: "Death Note: Rewrite",
      description: "1. Genshisuru Kami (Visions of a God) A two hour episode of Death Note, mainly a compilation of the confrontations between Light and L, re-edited from Ryuk's perspective with new dialogue and soundtra...",
      image: "./portadaSeries/DeathNoteReWrite.jpg",
      studios: "Madhouse",
      episodes: 37,
      tipo: "Serie"
    },
    {
      title: "Dragon Ball",
      description: "Gokuu Son es un niño que vive solo en el bosque, es decir, hasta que una niña llamada Bulma se encuentra con él en su búsqueda de un conjunto de objetos mágicos llamados 'Dragon Balls'. Dado que los artefactos son ...",
      image: "./portadaSeries/DragonBall.jpg",
      studios: "Toei Animation",
      episodes: 153,
      tipo: "Serie"
    },
    {
      title: "Dragon Ball Z",
      description: "Cinco años después de ganar el torneo mundial de artes marciales, Gokuu ahora vive una vida pacífica con su esposa e hijo. Sin embargo, esto cambia con la llegada de un misterioso enemigo llamado Raditz que pr ...",
      image: "./portadaSeries/DragonBallZ.jpg",
      studios: "Toei Animation",
      episodes: 291,
      tipo: "Serie"
    },
  ]
  var items = [];
  for (var i = 0; i<resultados.length; i++){
    items.push(
      <GridItem xs={12} sm={3}>
        <h4 style={{textAlign: "center"}}>{resultados[i].title}</h4>
        <p style={{textAlign: "center", fontSize: "11px"}}>Estudio: {resultados[i].studios} | Espisodios {resultados[i].episodes} | Tipo: {resultados[i].tipo}</p>
        <img
          src={resultados[i].image}
          alt=""
          className={classes.imgRounded + " " + classes.imgFluid}
        />
        <p align="justify">{resultados[i].description}</p>
      </GridItem>
    )
  }
    return (
      <div id="images" className={classes.container}>
          <div className={classes.title} >
            <h2 style={{textAlign: "center"}}>Resultado de Búsqueda</h2>
          </div>
          <br />
        <GridContainer>
            {items}
        </GridContainer>
      </div>
    );
}