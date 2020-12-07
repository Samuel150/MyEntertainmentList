import React, { Component } from 'react'
import {Box,Grid,Input, Stack, FormControl, Button , InputGroup, Divider} from "@chakra-ui/core"
import {Link} from 'react-router-dom';

class SignUp extends Component {


    render() {
        return (
            <div>
                    <h2 style={{textAlign:'center'}}>Registrate</h2>
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
                                    <Input type="name" placeholder='Nombres'></Input>
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input type="name" placeholder='Apellidos'></Input>
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input type="name" placeholder='Apodo'></Input>
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input type="email" placeholder='Correo'></Input>
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input type="password" placeholder='Contraseña'></Input>
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input type="password" placeholder='Repetir Contraseña'></Input>
                                </InputGroup>
                            </FormControl>
                            <Button variantColor="orange" type='submit'>Registrar</Button>
                        </Stack>
                    </form>
                    <Divider></Divider>
                    
                    <p style={{textAlign:'center'}}>Ya tienes una cuenta? <p>Olvidaste tu contraseña? <Link to="/LogIn">Iniciar Sesión</Link></p></p>
            </div>
        )
    }
}

export default SignUp

