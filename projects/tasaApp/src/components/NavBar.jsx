import { Heading, Container, Box, Text, Flex, IconButton, HStack } from "@chakra-ui/react";
import { Bell, Apple, Calendar, AlignLeft } from 'lucide-react';

const NavBar = ({onToggle}) => {
  return (
    <Flex 
        as="nav" 
        padding="10px 20px" 
        alignItems="center" 
        justifyContent={{base:"space-between", lg:"flex-end"}}
        bg="white"
    >
        <HStack display={{base:"flex", lg:"none"}}>
            <IconButton 
                variant="ghost"
                onClick={onToggle}
                m="0px"
            >
                <AlignLeft />
            </IconButton>
            <Heading as="h1" fontSize="30px">
                Tasa.
            </Heading>
        </HStack>
        

        <Flex alignItems="center" gap="10px">
            {/* <IconButton 
                w="auto"
                aria-label="notification"
                icon={<Bell />}
                bg="gray.200"
            /> */}
            <Box bg="gray.200" alignItems="center" p="5px">
                <Bell/>
            </Box>
            

            <HStack alignItems="center" gap="3px">
                <Box bg="gray.200" p="5px">
                    EM
                </Box>
                <Text as="span">Techwithemma</Text>
            </HStack>  
        </Flex>
    </Flex>
  )
}

export default NavBar
