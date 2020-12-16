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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function createData(number, titulo, emision) {
  return { number, titulo, emision };
}
const rows = [
  createData(1,"Full Metal Alchemist", "5 Abril 2009"),
  createData(2,"El dia del inicio", "12 Abril 2009"),
  createData(3,"La ciudad de la herejía",  "19 Abril 2009"),
  createData(4,"La angustia de un Alquimista",  "26 Abril 2009"),
  createData(5,"Lluvia de tristeza", "2 Mayo 2009"),
  createData(6,"El camino hacia la esperanza", "10 Mayo 2009"),
  createData(7,"La verdad oculta", "17 Mayo 2009"),
  createData(8,"Investigando el Laboratorio número 5", "24 Mayo 2009"),
  createData(9,"Sentimientos creados", "31 Mayo 2009"),
  createData(10,"Cada destino", "7 Junio 2009"),
  createData(11,"Milagro en Rush Valley", "14 Junio 2009"),
  createData(12,"Uno es todo, y todo es uno", "21 Junio 2009"),
  createData(13,"Las bestias de Dublith", "28 Junio 2009"),
  createData(14,"Aquellos que acechan bajo la tierra", "5 Julio 2009")
  
];


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
            <GridContainer justify="left" spacing={2}>
                <GridItem xs={12} sm={4} md={4}>
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
                              
                            </CardBody>
                          </Card>
                          <div align="left">
                          <Button color="orange" BlockRounded href="mylists">Añadir a mi lista</Button>
                          <Button color="orange" BlockRounded href="/forums/o88e14t33a4m">Ver Foro</Button>
                          </div>
                </div>
                </GridItem>
                <GridItem xs={12} sm={8} md={8} className={classes.navWrapper}>
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
                            <h3 align="center"><b>Score:</b> 9.21 &nbsp; <b>Rank:</b> #1 &nbsp; <b>Popularity: </b> #4</h3>
                            <hr
                                style={{
                                    color: "black",
                                    backgroundColor: "black",
                                    height: 1
                                }}
                            />
                            <h4 className={classes.cardTitle}><b>Informacion</b> &emsp;</h4>
                              <p><b>Tipo: </b>&nbsp;&nbsp;TV</p>
                              <p><b>Episodios: </b>&nbsp;&nbsp;64</p>
                              <p><b>Estado: </b>&nbsp;&nbsp;Emision terminada</p>
                              <p><b>Emision: </b>&nbsp;&nbsp;Apr 5, 2009 - Jul 4, 2010</p>
                              <p><b>Productores: </b>&nbsp;&nbsp;Aniplex, Square Enix, Mainichi Broadcasting System, Studio Moriken</p>
                              <p><b>Generos: </b>&nbsp;&nbsp;Accion, Militar, Aventura, Comedia, Drama, Magia, Fantasia, Shounen</p>
                              <p><b>Licencias: </b>&nbsp;&nbsp;Funimation, Aniplex of America</p>

                              <hr
                                style={{
                                    color: "black",
                                    backgroundColor: "black",
                                    height: 1
                                }}
                            />
                              <p><b>Synopsis</b></p>
                            <p align="justify">Fullmetal Alchemist trata sobre Edward y Alphonse Elric, dos hermanos que viven en el país de Amestris, un estado militarizado por completo (el jefe del estado es el jefe del ejército), en un mundo donde la alquimia es algo cotidiano, dándole un trasfondo fantástico a la obra. Por otro lado, existe también la tecnología de los implantes automails, por lo general brazos y piernas, que sustituyen miembros perdidos, que otorgan un toque de ciencia ficción. Estos dos hechos son relevantes, ya que ambos hermanos son alquimistas, pero además, Ed tiene automails en sustitución de su brazo derecho y su pierna izquierda. </p>
                            <p align="justify">Al es sólo un alma vinculada mediante alquimia a una armadura. Este es el castigo que ambos hermanos sufrieron al tratar de resucitar a su madre mediante la alquimia. Este es eje central sobre el que se desarrolla la obra: el cómo ambos hermanos tratan de recuperar sus cuerpos, buscando para ello la mítica piedra filosofal. A medida que avance la obra, conocerán a gente con intereses similares, algunos amigos, pero sobre todo enemigos, y surgirán muchísimos problemas.</p>
                          </div>
                      )
                    },
                    {
                      tabButton: "Episodios",
                      tabContent: (
                        <TableContainer component={Paper}>
                      <Table className={classes.table} size="big" aria-label="a dense table" stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="center">Titulo</TableCell>
                            <TableCell align="center">Emision</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell >
                                {row.number}
                              </TableCell>
                              <TableCell align="center"> {row.titulo} </TableCell>
                              <TableCell align="center">{row.emision}</TableCell>
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
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
