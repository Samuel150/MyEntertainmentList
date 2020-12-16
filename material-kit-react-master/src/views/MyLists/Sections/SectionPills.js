import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
import image5 from "assets/img/portSG.jpg";
import image6 from "assets/img/portGin.jpg";
import image7 from "assets/img/portCB.jpg";
import image8 from "assets/img/portHI.jpg";
import image9 from "assets/img/portVS.jpg";
import image10 from "assets/img/portKS.jpg";
import image11 from "assets/img/portGH.jpg";
import image12 from "assets/img/portCG.jpg";
function createData(number, image, titulo, puntaje, progreso) {
  return { number, image, titulo, puntaje, progreso };
}
const rows = [
  createData(1, image1, "Full Metal Alchemist", 10, 64),
  createData(2, image2, "Tengen Toppa Gurren Lagann", 10, 27),
  createData(3, image7, "Cowboy Bebop", 10, 26),
  createData(4, image3, "Shingeki no kyojin", 9, 20),
  createData(5, image4, "One piece", 9, 925),
  createData(6, image5, "Steins;Gate", 9, 21),
  createData(7, image6, "Gintama", 9, 215),
  createData(8, image8, "Hajime no Ippo", 9, 75),
  createData(9, image9, "Vinland Saga", 8, 22),
  createData(10, image10, "Kaguya-sama wa Kokurasetai?", 8, 11),
  createData(11, image11, "The God of High School", 5, 4),
  createData(12, image12, "Code Geass", "-", "-"),

];

const rowsC = [
  createData(1, image1, "Full Metal Alchemist", 10, 64),
  createData(2, image2, "Tengen Toppa Gurren Lagann", 10, 27),
  createData(3, image7, "Cowboy Bebop", 10, 26),
  createData(4, image3, "Shingeki no kyojin", 9, 20),
  createData(5, image5, "Steins;Gate", 9, 21),
  createData(6, image8, "Hajime no Ippo", 9, 75),
  createData(7, image10, "Kaguya-sama wa Kokurasetai?", 8, 11),

];
const rowsM = [
  createData(1, image4, "One piece", 9, 925),
  createData(2, image6, "Gintama", 9, 215),
  createData(3, image9, "Vinland Saga", 8, 22),

];
const rowsD = [
  createData(1, image11, "The God of High School", 5, 4),

];
const rowsP = [
  createData(1, image12, "Code Geass", "-", "-"),

];
const rowsE = [
  

];

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h2 className={classes.titleCarousel}>Todas tus listas de anime</h2>
          </div>

          <GridContainer  justify="center">
            <GridItem xs={90} sm={90} md={90} lg={90}>
              <NavPills
                color= "orange"
                tabs={[
                  {
                    tabButton: "Todos",
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
                              <TableCell  align="left"><a style={{color: "black"}} href="description"> {row.titulo}</a> </TableCell>
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
                    tabButton: "Mirando",
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
                          {rowsM.map((row) => (
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
                    tabButton: "Completados",
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
                          {rowsC.map((row) => (
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
                    tabButton: "Descartados",
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
                          {rowsD.map((row) => (
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
                    tabButton: "En Espera",
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
                          {rowsE.map((row) => (
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
                    tabButton: "Planeo ver",
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
                          {rowsP.map((row) => (
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
