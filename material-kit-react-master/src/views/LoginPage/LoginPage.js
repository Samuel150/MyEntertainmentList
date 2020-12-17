import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import {Link, useHistory} from 'react-router-dom';
import { useForm, Form } from "views/SignUpPage/useForm.js"
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from '@material-ui/core/FormControl';
import Check from "@material-ui/icons/Check";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import stylesCheckbox from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import image from "assets/img/bganime36.jpg";

const useStylesCheckbox = makeStyles(stylesCheckbox);
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const classesCheckbox = useStylesCheckbox();

  let history = useHistory();
  const initialValues = {
    email: "",
    password: ""
  }
  const validate = ()=>{
    let temp = {}
    temp.email= ((/$^|.+@.+..+/).test(values.email) && values.email)?"":"Ingresar un correo valido."
    temp.password= values.password?"":"El campo contraseña es obligatorio."
    setErrors({
      ...temp
    })
    return Object.values(temp).every(x=>x==="")
  }
  const {
    values,
    setValues,
    handelInputChange,
    errors,
    setErrors
  }=useForm(initialValues)

  const handleSubmit = e =>{
    e.preventDefault()
    if(validate()){
      history.push("/");
    }
  }
  return (
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          marginBottom: "0px"
        }}
      >
        <div className={classes.container} style={{paddingTop: "5vh"}}>
          <GridContainer justify="center" direction="column" alignItems="flex-end">
            <GridItem xs={9} sm={9} md={4} >
              <div >
              <Link to="/">
              <img
                src={"./logoMALPNG.png"}
                alt=""
                width="70%"
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </Link>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <Card className={classes[cardAnimaton]}>
                {/* <form className={classes.form}> */}
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
                  <Form onSubmit={handleSubmit}> 
                  <CardBody>
                    
                    <CustomInput
                      labelText="Correo"
                      id="email"
                      error={errors.email}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        onChange: handelInputChange,
                        value: values.email,
                        name: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Contraseña"
                      id="pass"
                      error={errors.password}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange: handelInputChange,
                        name: "password",
                        value: values.names,
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
                  {/* <Link to="/"> */}
                    <Button simple color="white" type="submit" size="lg">
                      Ingresar
                    </Button>
                  {/* </Link> */}
                  
                  </CardFooter>
                  </Form>
                  <div style={{textAlign: "center", marginBottom: "5%"}}>
                    <p >Olvidaste tu contraseña? <Link   onClick={handleClickOpen} style={{color: "#0022ff"}}>  Recuperar Cuenta</Link></p>
                  </div>

                  <div style={{textAlign: "center", marginBottom: "5%"}}>
                    <p>No tienes una cuenta? <Link style={{color: "#0022ff"}} to="/signUp">Crear Cuenta</Link></p>
                  </div>
                {/* </form> */}
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Recuperar Cuenta</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Ingrese su email para enviarle un correo de recuperación de cuenta
                    </DialogContentText>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email"
                      }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} simple color="white">
                      Cancelar
                    </Button>
                    <Button onClick={handleClose} simple color="white">
                      Enviar
                    </Button>
                  </DialogActions>
                </Dialog>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
  );
}
