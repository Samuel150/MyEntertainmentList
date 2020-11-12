import React, { Component } from 'react'
import {Input, Stack, FormControl, Button , InputGroup, Divider} from "@chakra-ui/core"

class LogIn extends Component {
    render() {
        return (
            <div>
                <h2 style={{textAlign:'center'}}>Iniciar Sesión</h2>
                    <form action='submit'>
                        <Stack spacing={3}>
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
                            <Button variantColor="orange" type='submit'>Registrar</Button>
                        </Stack>
                    </form>
                    <Divider></Divider>
                    <p style={{textAlign:'center'}}>Olvidaste tu contraseña? recuperar cuenta</p>
            </div>
        )
    }
}

export default LogIn
