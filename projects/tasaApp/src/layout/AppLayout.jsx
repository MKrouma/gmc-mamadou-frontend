import { Outlet } from "react-router-dom"
import { Grid, GridItem, Box, useDisclosure } from "@chakra-ui/react";
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar";


const AppLayout = () => {
  const {isOpen, onToggle, onClose} = useDisclosure()
  return (
    <Grid templateColumns="repeat(6,1fr)" bg="gray.200">
      <GridItem 
        as="aside" 
        colSpan={{base:"6", lg:"2", xl:"1"}} 
        bg="white" minH="100vh" p="10px 20px"
        position={{base:"absolute", lg:"static"}} 
        left={{base: isOpen ? "0" : "-100%", lg:"auto"}}
        zIndex="99"
        transition="all 0.5s ease-in-out"
      >
        <SideBar onClose={onClose}/>
      </GridItem>

      <GridItem 
        as="main" 
        colSpan={{base:"6", lg:"4", xl:"5"}} 
        bg="gray.100" minH="100vh"

      >
        <NavBar onToggle={onToggle} />
        <Box p="10px 40px"> 
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  )
}

export default AppLayout