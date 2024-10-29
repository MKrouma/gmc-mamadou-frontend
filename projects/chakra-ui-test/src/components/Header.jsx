import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = (props) => {

    return (
        <Box 
        as="section" color="#F7FAFC" display="flex" alignItems="center" justifyContent="start" 
        flexDirection="column" w="100%" bg="#6B46B1" p="90px 32px 200px 32px"
        >
            <Heading fontWeight="800" fontSize="48px" pb="20px">
                Simple pricing for your business
            </Heading>
            <Text fontWeight="500" fontSize="24px" color="#F7FAFC">
                Plans that are carefully crafted to suit your business.
            </Text>
        </Box>
    )
}

export default Header;