import React, { Component } from 'react'
import { Flex, Box  } from "@chakra-ui/core"
import LogIn from './LogIn'

export class LogInOutter extends Component {
    render() {
        return (
        <Flex direction='column' align='center' justify='center'>
            <Flex justify='center' align='center' w='100%' h='93vh'>
                <Box w={["80vw","60vw","50vw","35vw"]}  bg="gray.200" p={10} boxShadow='md' rounded='lg'>
                    <LogIn></LogIn>
                </Box>
            </Flex>
        </Flex>
        )
    }
}

export default LogInOutter
