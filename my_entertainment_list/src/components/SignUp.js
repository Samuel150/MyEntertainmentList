import React, { Component } from 'react'
import {Input, Stack, FormControl, Button , InputGroup, Divider} from "@chakra-ui/core"

class SignUp extends Component {


    render() {
        return (
            <div>
                    <h2 style={{textAlign:'center'}}>Registrate</h2>
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
                    <p style={{textAlign:'center'}}>Ya tienes una cuenta? Iniciar Sesion</p>
            </div>
        )
    }
}

export default SignUp

