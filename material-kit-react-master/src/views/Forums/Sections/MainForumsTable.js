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
import classNames from "classnames";
import { Link } from "react-router-dom";


import image1 from "assets/img/portFMA.jpg";
import image2 from "assets/img/portGL.jpg";
import image3 from "assets/img/portSNK.jpg";
import image4 from "assets/img/portOP.jpg";
import Forum from "@material-ui/icons/Forum";

const malRows = [
  {icon: Forum, title:"Actualizaciones y anuncios",description:"Actualizaciones, cambios y adiciones a MAL."},
  {icon: Forum, title:"FAQ",description:"Reglas del sitio, reglas del foro, y otra información de ayuda."},
  {icon: Forum, title:"Soporte",description:"Tienes algún problema usando el sitio o encontraste un bug? Publica aquí"},
  {icon: Forum, title:"Sugerencias",description:"Tienes alguna idea o sugerencia para el sitio? Compártela aqui."},
  {icon: Forum, title:"MAL Concursos",description:"Puedes encontrar nuestros concursos de temporada aqui."}
];

const generalRows = [
  {icon: Forum, title:"Presentaciones",description:"Nuevo en MyAnimeList? Preséntate aqui."},
  {icon: Forum, title:"Juegos, Computadoras y Tecnología",description:"Discusión sobre novelas virales y otros videojuegos."},
  {icon: Forum, title:"Musica y Entretenimiento",description:"Live-action series, novelas mejores vendidas, etc."},
  {icon: Forum, title:"Eventos actuales",description:"Últimas noticias en diversos tópicos."},
  
]

const useStyles = makeStyles(styles);

export default function MainForumsTable(props) {
  const classes = useStyles();
  const { vertical } = props;
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
            <GridItem xs={12} sm={12} md={8} lg={8}>
              <NavPills
                color= "orange"
                tabs={[
                  {
                    tabButton: "My Anime List",
                    tabContent: (
                      <TableContainer component={Paper}>
                      <Table className={classes.table} size="big" aria-label="a dense table" stickyHeader aria-label="sticky table">
                        <TableBody>
                          {malRows.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell style={{width:"60px"}} align="center">
                                  <row.icon style={{color:'#412014'}} className={iconClasses} />
                              </TableCell>
                              <TableCell  align="left">
                                <div style={{display:"flex", flexDirection:"column"}}>
                                  <Link style={{color:'#8A4023'}} to="/forums">{row.title}</Link>
                                  <div style={{color:'gray'}}>{row.description}</div>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    )
                  },
                  {
                    tabButton: "General",
                    tabContent: (
                      <TableContainer component={Paper}>
                      <Table className={classes.table} size="big" aria-label="a dense table" stickyHeader aria-label="sticky table">
                        <TableBody>
                          {generalRows.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell style={{width:"60px"}} align="center">
                                  <row.icon style={{color:'#412014'}} className={iconClasses} />
                              </TableCell>
                              <TableCell  align="left">
                                <div style={{display:"flex", flexDirection:"column"}}>
                                  <Link style={{color:'#8A4023'}} to="/forums">{row.title}</Link>
                                  <div style={{color:'gray'}}>{row.description}</div>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    )
                  },
                ]}
              />
            </GridItem>

  );
}
