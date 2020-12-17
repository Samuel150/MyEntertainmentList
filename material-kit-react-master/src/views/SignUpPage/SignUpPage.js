import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
//import Person from "@material-ui/icons/Person";
import PersonOutline from "@material-ui/icons/PersonOutline";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { useForm, Form } from "views/SignUpPage/useForm.js"
import {Link, useHistory } from 'react-router-dom';

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bganime18.jpg";
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  let history = useHistory();

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const initialValues = {
    names: "",
    lastNames: "",
    nick:"",
    email:"",
    password:"",
    password2:""
  }
  const validate = ()=>{
    let temp = {}
    temp.names= values.names?"":"El campo nombres es obligatorio."
    temp.lastNames= values.lastNames?"":"El campo apellidos es obligatorio."
    temp.nick=values.nick?"":"El campo apodo es obligatorio."
    temp.email =((/$^|.+@.+..+/).test(values.email) && values.email)?"":"Debe ingresar un correo valido."
    temp.password=values.password?"":"Debe ingresar una contraseña."
    if (!values.password2){
      temp.password2="Debe repetir la contraseña."
    }else if(values.password2!=values.password){
      temp.password2="La contraseña no es igual."
    }else{
      temp.password2=""
    }
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
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container} style={{paddingTop: "1vh"}}>
          <GridContainer justify="center" direction="column" alignItems="center" style={{marginTop: "5vw"}}>
          <GridItem xs={6} sm={5} md={3} >
              <Link to="/">
              <img
                src={"./logoMALPNG.png"}
                alt=""
                width="100%"
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </Link>
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <Card className={classes[cardAnimaton]}>
                {/* <form className={classes.form}> */}
                  <CardHeader color="primaryAnime" className={classes.cardHeader}>
                    <h4>Registrarse</h4>
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
                      labelText="Nombres"
                      id="first"
                      error= {errors.names}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        onChange: handelInputChange,
                        name: "names",
                        value: values.names,
                        
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Apellidos"
                      id="first"
                      error= {errors.lastNames}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        onChange: handelInputChange,
                        value: values.lastNames,
                        
                        name: "lastNames",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Apodo"
                      id="first"
                      error={errors.nick}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        onChange: handelInputChange,
                        value: values.nick,
                        name: "nick",
                        endAdornment: (
                          <InputAdornment position="end">
                            <PersonOutline className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Correo"
                      id="email"
                      error= {errors.email}
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
                      error= {errors.password}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange: handelInputChange,
                        value: values.password,
                        
                        name: "password",
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
                    <CustomInput
                      labelText="Repetir Contraseña"
                      id="pass"
                      error= {errors.password2}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange: handelInputChange,
                        value: values.password2,
                        
                        name: "password2",
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
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    {/* <Link to="/"> */}
                        <Button simple color="white" type="submit" size="lg">
                        Registrarse
                        </Button>
                    {/* </Link> */}
                  </CardFooter>
                </Form>
                  <div style={{textAlign: "center", marginBottom: "5%"}}>
                    <p>Ya tienes una cuenta <Link style={{color: "#0022ff"}} to="/login">Iniciar Sesión</Link></p>
                  </div>
                {/* </form> */}
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}