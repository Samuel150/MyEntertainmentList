import React, { useState }from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import TemplatePage from "views/TemplatePage"
import Parallax from "components/Parallax/Parallax.js";
import classNames from "classnames";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Button from "components/CustomButtons/Button.js";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import stylesCheckbox from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from 'react-router-dom';
import Check from "@material-ui/icons/Check";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStylesCheckbox = makeStyles(stylesCheckbox);



const useStyles = makeStyles(styles);

export default function SearchResults() {
  const classes = useStyles();
  const [count, setCount] = useState(false);
  const classesCheckbox = useStylesCheckbox();
  const tipo = ["Pelicula", "Serie", "Película Corta", "Documental"]
  const genero = ["Acción", "Aventura", "Animación","Drama", "Comedia", "Fantasia", "Documental", "Historia", "Horror", "Sci-Fi", "Deporte", "Biografía", "Thriller"]
  const estudio = ["Toei Animation", "Sunrise", "Production I.G.", "Madhouse", "J.C. Staff", "TMS Entertainment", "Studio Deen", "Studio Pierrot", "OML", "Nippon Animation"]
  const ranking = ["All Anime", "Top Hiring", "Top Uncoming", "Top TV Series", "Top Movies", "Top Ovas", "Most Popular"]
  const filtro = ["Mostrar todos los títulos", "Excluir títulos vistos por mí"]
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
        <Link to="/description">
        <img
          src={resultados[i].image}
          alt=""
          className={classes.imgRounded + " " + classes.imgFluid}
        />
        </Link>
        <p align="justify">{resultados[i].description}</p>
      </GridItem>
      
    )
  }
  var itemsTipo =[];
  for (var i = 0; i<tipo.length;i++){
    itemsTipo.push(
      <GridItem xs={12} sm={2}>
        <FormControlLabel
          control={
          <Checkbox
            tabIndex={-1}
            checkedIcon={<Check className={classesCheckbox.checkedIcon} />}
            icon={<Check className={classesCheckbox.uncheckedIcon} />}
            classes={{
              checked: classesCheckbox.checked,
              root: classesCheckbox.checkRoot
            }}
          />
          }
          label={tipo[i]}
        />
      </GridItem>
    )  
  }
  var itemsGenero =[];
  for (var i = 0; i<genero.length;i++){
    itemsGenero.push(
      <GridItem alignContent="flex-start" xs={12} sm={2} >
        <FormControlLabel
          control={
          <Checkbox
            tabIndex={-1}
            checkedIcon={<Check className={classesCheckbox.checkedIcon} />}
            icon={<Check className={classesCheckbox.uncheckedIcon} />}
            classes={{
              checked: classesCheckbox.checked,
              root: classesCheckbox.checkRoot
            }}
          />
          }
          label={genero[i]}
        />
      </GridItem>
    )  
  }
  var itemsStudio = [];
  for (var i = 0; i<estudio.length;i++){
    itemsStudio.push(
      <GridItem alignContent="flex-start" xs={12} sm={2} >
        <FormControlLabel
          control={
          <Checkbox
            tabIndex={-1}
            checkedIcon={<Check className={classesCheckbox.checkedIcon} />}
            icon={<Check className={classesCheckbox.uncheckedIcon} />}
            classes={{
              checked: classesCheckbox.checked,
              root: classesCheckbox.checkRoot
            }}
          />
          }
          label={estudio[i]}
        />
      </GridItem>
    )  
  }
  var itemsRanking = [];
  for (var i = 0; i<ranking.length;i++){
    itemsRanking.push(
      <GridItem alignContent="flex-start" xs={12} sm={2} >
        <FormControlLabel
          control={
          <Checkbox
            
            tabIndex={-1}
            checkedIcon={<Check className={classesCheckbox.checkedIcon} />}
            icon={<Check className={classesCheckbox.uncheckedIcon} />}
            classes={{
              checked: classesCheckbox.checked,
              root: classesCheckbox.checkRoot
            }}
          />
          }
          label={ranking[i]}
        />
      </GridItem>
    )  
  }
  var itemsFiltro = [];
  for (var i = 0; i<filtro.length;i++){
    itemsFiltro.push(
      <GridItem alignContent="flex-start" xs={12} sm={12} >
        <FormControlLabel
          control={
          <Checkbox
            
            tabIndex={-1}
            checkedIcon={<Check className={classesCheckbox.checkedIcon} />}
            icon={<Check className={classesCheckbox.uncheckedIcon} />}
            classes={{
              checked: classesCheckbox.checked,
              root: classesCheckbox.checkRoot
            }}
          />
          }
          label={filtro[i]}

        />
      </GridItem>
    )  
  }
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
    <TemplatePage>
      <Parallax small filter image={require("assets/img/bganimesearch.jpg")} />
      <div style={{textAlign: "center", marginRight: "5%"}} className={classNames(classes.main, classes.mainRaised)}>
        {count ? 
        <>
        <Button onClick={() => setCount(!count)} style={{float: "left",marginLeft: "5%", marginTop: "3%",verticalAlign: "middle"}} simple color="white" size="md">
        <NavigateBeforeIcon style={{ verticalAlign: "middle", fontSize: 40}}/>Volver
        </Button> 
        <div className={classes.container}>
            <div className={classes.title} >
              <h2>  Resultado de Búsqueda</h2>
              <p>tipo: Serie; género: Accion, Aventura; filtro: todos los títulos</p>
            </div>
            <br/>
          <GridContainer>
              {items}
          </GridContainer>
        </div>
        </>
        :
        <>
        <div className={classes.container}>
            <div className={classes.title} >
              <h2>  Buscar Anime</h2>

            </div>
            <br/>
          <GridContainer alignItems="center" justify="center">
            <GridItem xs={12} sm={5}>
            <Paper component="form" >
              <InputBase
                placeholder="Titulo"
              />
              <IconButton onClick={() => setCount(!count)} type="submit"  aria-label="search">
                < SearchIcon />
              </IconButton>
            </Paper>
            </GridItem>
          </GridContainer>
          <div className={classes.title} style={{paddingTop: "0px"}} >
              <h2>  Búsqueda Avanzada</h2>
            </div>
          <h4 style={{textAlign: "left"}}>Tipo:</h4>
          <GridContainer style={{textAlign: "left"}}>
            {itemsTipo}
          </GridContainer > 
          <h4 style={{textAlign: "left"}}>Géneros:</h4>
          <GridContainer style={{textAlign: "left"}} >
            {itemsGenero}
          </GridContainer>
          <h4 style={{textAlign: "left"}}>Estudios:</h4>
          <GridContainer style={{textAlign: "left"}} >
            {itemsStudio}
          </GridContainer>
          <h4 style={{textAlign: "left"}}>Rankings:</h4>
          <GridContainer style={{textAlign: "left"}} >
            {itemsRanking}
          </GridContainer>
          <h4 style={{textAlign: "left"}}>Filtro:</h4>
          <GridContainer style={{textAlign: "left"}} >
            {itemsFiltro}
          </GridContainer>
          
          <Button onClick={() => setCount(!count)} style={{float: "center",marginLeft: "5%", marginTop: "3%",verticalAlign: "middle", marginBottom: "5%"}} simple color="white" size="large">
          <ArrowForwardIosIcon style={{ verticalAlign: "middle", fontSize: 40}}/>Buscar
          </Button>
        
         
        </div>
        </>
        }
      </div>
    </TemplatePage>
    );
}