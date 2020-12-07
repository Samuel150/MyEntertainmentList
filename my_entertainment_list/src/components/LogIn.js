import React, { Component } from 'react'
import {Checkbox,Input, Stack, FormControl, Button , InputGroup, Divider, Grid, Box, Image} from "@chakra-ui/core"
import {Link} from 'react-router-dom';

const iconURLs = {
    google : '/googleIcon.png'
}
class LogIn extends Component {
    
    render() {
        return (
            <div>
                <h2 style={{textAlign:'center'}}>Iniciar Sesión</h2>
                    <h3 style={{textAlign:'center'}}>con:</h3>
                    <div>
                    <Grid margin="auto" templateColumns="repeat(3, 1fr)" gap={2}>
                        <Box w="100%" h="20"  style={{textAlign: "right"}} ><img style={{width: "auto", height: "100%"}} alt=""  src={'./googleIcon.png'}/></Box>
                        <Box w="100%" h="20" style={{textAlign: "center"}}><img style={{width: "auto", height: "100%"}} alt=""  src={'./facebookIcon.png'}/></Box>
                        <Box w="100%" h="20" style={{textAlign: "left"}}><img style={{width: "auto", height: "100%"}} alt=""  src={'./twitterIcon.png'}/></Box>
                    </Grid>
                    </div>
                    <p style={{textAlign:'center'}}>o</p>
                    <form action='submit'>
                        <Stack spacing={3}>
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input type="email" placeholder='Correo o Apodo'></Input>
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input type="password" placeholder='Contraseña'></Input>
                                </InputGroup>
                            </FormControl>
                            <Button variantColor="orange" type='submit'>Ingresar</Button>
                        </Stack>
                    </form>
                    <Divider></Divider>
                    <div style={{textAlign:"center"}}>
                    <Checkbox size="md" colorScheme="orange">Mantener sesión abierta</Checkbox>
                    <p>Olvidaste tu contraseña? <Link to="/LogIn">Recuperar Contraseña</Link></p>
                    <p>No tienes una cuenta? <Link to="/SignUp">Regístrate</Link></p>
                    </div>
            </div>
        )
    }
}

export default LogIn
