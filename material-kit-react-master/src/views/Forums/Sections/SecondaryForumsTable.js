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

import Forum from "@material-ui/icons/Forum";

const malRows = [
  {icon: Forum, title:"Fullmetal Alchemist: Periodo de tiempo",author:"Samuel Huanca",date:"2020/03/15",category:"Discusión de Anime",replies:1014},
  {icon: Forum, title:"¿Cuál es su personaje favorito?",author:"Andres Mendez", date:"2019/08/11",category:"Favoritos",replies:824},
  {icon: Forum, title:"Fullmetal Alchemist vs Fullmetal Alchemist:Brotherhood",author:"Koogmaster", date:"2020/10/05",category:"Discusión de Anime",replies:782},
];

const recentRows = [
  {icon: Forum, title:"¿Cuál es su anime favorito?",author:"Joaquín Viscafe",date:"2020/03/15",category:"Discusión de Anime",replies:1014},
  {icon: Forum, title:"¿Qué animes valen la pena ver en 2020?",author:"Rodrigo Villaroel", date:"2019/08/11",category:"Populares",replies:824},
  {icon: Forum, title:"Animes en tendencia",author:"Mateo Altamirano", date:"2020/10/05",category:"Tendencias",replies:782},
];

const useStyles = makeStyles(styles);

export default function SecondaryForumsTable(props) {
  const classes = useStyles();
  const { vertical } = props;
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
            <GridItem xs={12} sm={12} md={4} lg={4}>
              <NavPills
                color= "orange"
                tabs={[
                  {
                    tabButton: "Popular",
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
                                  <Link style={{color:'#8A4023'}} to="/forum/o88e14t33a4m">{row.title}</Link>
                                  <div style={{color:'gray'}}>{row.date}</div>
                                  <div style={{color:'gray'}}>en {row.category}</div>
                                </div>
                              </TableCell>
                              <TableCell  align="right">
                                <div style={{display:"flex", flexDirection:"column"}}>
                                  <div style={{color:'gray'}}>por {row.author}</div>
                                <div>Respuestas {row.replies}</div>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    )
                  }, {
                    tabButton: "Recent",
                    tabContent: (
                      <TableContainer component={Paper}>
                      <Table className={classes.table} size="big" aria-label="a dense table" stickyHeader aria-label="sticky table">
                        <TableBody>
                        {recentRows.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell style={{width:"60px"}} align="center">
                                  <row.icon style={{color:'#412014'}} className={iconClasses} />
                              </TableCell>
                              <TableCell  align="left">
                                <div style={{display:"flex", flexDirection:"column"}}>
                                  <Link style={{color:'#8A4023'}} to="/forum/o88e14t33a4m">{row.title}</Link>
                                  <div style={{color:'gray'}}>{row.date}</div>
                                  <div style={{color:'gray'}}>en {row.category}</div>
                                </div>
                              </TableCell>
                              <TableCell  align="right">
                                <div style={{display:"flex", flexDirection:"column"}}>
                                  <div style={{color:'gray'}}>por {row.author}</div>
                                <div>Respuestas {row.replies}</div>
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
