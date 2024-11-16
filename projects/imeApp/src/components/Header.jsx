import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box>
      <Heading
        as="h1"
        fontSize="45px"
        fontWeight="700"
        m="20px 0px 20px 0px"
      >
        Ime Todo App
      </Heading>
    </Box>
  )
}

export default Header
