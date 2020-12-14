import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
//import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
//import HeaderLinks from "components/Header/HeaderLinks.js";
// Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import {Link} from 'react-router-dom';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bganime36.jpg";

import stylesCheckbox from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStylesCheckbox = makeStyles(stylesCheckbox);
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const classesCheckbox = useStylesCheckbox();
  //const { ...rest } = props;
  return (
    <div >
      <Header
        absolute
        color="transparent"
        logo="true"
        hasNavbar="false"
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container} >
          <GridContainer justify="flex-end" style={{marginTop: "5vw"}}>
            <GridItem xs={12} sm={12} md={5}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primaryAnime" className={classes.cardHeader}>
                    <h4>Inciar Sesión</h4>
                    <h5>con</h5>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                    
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                       
                          <i className={"fab fa-google-plus-g"} />
                       
                      </Button>
                
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>O de manera clásica</p>
                  <CardBody>
                    {/* <CustomInput
                      labelText="Nombres..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    /> */}
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
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
                    classes={{ label: classesCheckbox.label, root: classesCheckbox.labelRoot }} 
                  />Mantener Sesión Abierta
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <Link to="/">
                    <Button simple color="white" size="lg">
                      Ingresar
                    </Button>
                  </Link>
                  
                  </CardFooter>
                  <div style={{textAlign: "center", marginBottom: "5%"}}>
                    <p>Olvidaste tu contraseña <Link style={{color: "#0022ff"}} to="/"> Recuperar Cuenta</Link></p>
                  </div>
                  <div style={{textAlign: "center", marginBottom: "5%"}}>
                    <p>No tienes una cuenta <Link style={{color: "#0022ff"}} to="/signup-page">Crear Cuenta</Link></p>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        {/* <Footer whiteFont /> */}
      </div>
    </div>
  );
}
