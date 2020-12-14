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

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
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
