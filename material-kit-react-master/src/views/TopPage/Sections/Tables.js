import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";




import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import image1 from "assets/img/portFMA.jpg";
import image2 from "assets/img/portGL.jpg";
import image3 from "assets/img/portSNK.jpg";
import image4 from "assets/img/portOP.jpg";

function createData(number, image, titulo, puntaje, progreso) {
  return { number, image, titulo, puntaje, progreso };
}
const rows = [
  createData(1, image1, "Full Metal Alchemist", 10, 64),
  createData(2, image2, "Tengen Toppa Gurren Lagann", 10, 27),
  createData(3, image3, "Shingeki no kyojin", 9, 20),
  createData(4, image4, "One piece", 9, 925),

];

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

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  var items = [];
  for (var i = 0; i<resultados.length; i++){
    items.push(
      <GridItem xs={10} sm={4} md={4} lg={4}>
        <div className={classes.container}>
        <h4 style={{textAlign: "center"}}>{resultados[i].title}</h4>
        <p style={{textAlign: "center", fontSize: "11px"}}>Estudio: {resultados[i].studios} | Espisodios {resultados[i].episodes} | Tipo: {resultados[i].tipo}</p>
        <img
          src={resultados[i].image}
          height="60%" width="20%" alt=""
          className={classes.imgRounded + " " + classes.imgFluid}
        />
        <p align="justify">{resultados[i].description}</p>
        </div>
      </GridItem>
    )
  }
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <GridContainer  justify="center">
            <GridItem xs={90} sm={90} md={90} lg={90}>
              <NavPills
                color= "orange"
                tabs={[
                  {
                    tabButton: "Top Anime",
                    tabContent: (
                      <TableContainer component={Paper}>
                      <Table className={classes.table} size="big" aria-label="a dense table" stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="left">Imagen</TableCell>
                            <TableCell align="left">Titulo</TableCell>
                            <TableCell align="left">Puntaje</TableCell>
                            <TableCell align="left">Progreso</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell component="th" scope="row">
                                {row.number}
                              </TableCell>
                              <TableCell align="left"> <img src= {row.image} alt="" border="0" height="100" width="80" /> </TableCell>
                              <TableCell  align="left"> <a style={{color: "black"}} href="description">{row.titulo}</a> </TableCell>
                              <TableCell align="left">{row.puntaje}</TableCell>
                              <TableCell align="left">{row.progreso}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    )
                  },
                  {
                    tabButton: "Top en emision",
                    tabContent: (
                      <TableContainer component={Paper}>
                      <Table className={classes.table} size="big" aria-label="a dense table" stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="left">Imagen</TableCell>
                            <TableCell align="left">Titulo</TableCell>
                            <TableCell align="left">Puntaje</TableCell>
                            <TableCell align="left">Progreso</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell component="th" scope="row">
                                {row.number}
                              </TableCell>
                              <TableCell align="left"> <img src= {row.image} alt="" border="0" height="100" width="80" /> </TableCell>
                              <TableCell  align="left"> {row.titulo} </TableCell>
                              <TableCell align="left">{row.puntaje}</TableCell>
                              <TableCell align="left">{row.progreso}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    )
                  },
                  {
                    tabButton: "Top Peliculas",
                    tabContent: (
                      <TableContainer component={Paper}>
                      <Table className={classes.table} size="big" aria-label="a dense table" stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="left">Imagen</TableCell>
                            <TableCell align="left">Titulo</TableCell>
                            <TableCell align="left">Puntaje</TableCell>
                            <TableCell align="left">Progreso</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell component="th" scope="row">
                                {row.number}
                              </TableCell>
                              <TableCell align="left"> <img src= {row.image} alt="" border="0" height="100" width="80" /> </TableCell>
                              <TableCell  align="left"> {row.titulo} </TableCell>
                              <TableCell align="left">{row.puntaje}</TableCell>
                              <TableCell align="left">{row.progreso}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    )
                  },
                  {
                    tabButton: "Mas Popular",
                    tabContent: (
                      <GridContainer spacing={4}>
                          {items}
                      </GridContainer>
                    )
                  }
                ]}
              />
            </GridItem>

          </GridContainer>
        </div>
      </div>
    </div>
  );
}
