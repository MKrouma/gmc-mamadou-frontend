import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

const Pricing = (props) => {

    return (
        <Box 
            as="section" display="flex" alignItems="center" justifyContent="center" 
            h="250px" mt="20px"
        >
            <Flex w="70%" h="100%" borderRadius="10px">
                <Box 
                    w="35%" h="100%" border="solid red 1px"
                    display="flex" alignItems="center" justifyContent="center" 
                    flexDirection="column" bg="#F0EAFB"
                >
                    <Text fontWeight="800" fontSize="24px" pb="20px">
                        Premium PRO
                    </Text>
                    <Heading as="h3" fontWeight="800" fontSize="48px" pb="20px">
                        $329
                    </Heading>
                    <Text pb="30px">Billed just once</Text>
                    <Button bg="#6B46B1" w="200px">
                        Get started
                    </Button>
                </Box>
                <Box w="65%" h="100%" bg="#6B46B1" border="solid red 1px">

                </Box>
            </Flex>
        </Box>
    )
}

export default Pricing;