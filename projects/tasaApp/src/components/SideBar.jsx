import { Button, List, Separator, VStack, HStack, Heading, IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom"
import { chakra } from "@chakra-ui/react"
import { Calendar, FolderDot, StickyNote, SquareUser, Settings, CircleX } from 'lucide-react';

const SideBar = ({onClose}) => {

  const itemStyle = {
    color: "green",
    li: {
      display: "flex",
      alignItems: "center",
      p: "40px 10px"
    }
  }

  const LinkItem = chakra("p", {
    base: {
      color: "#757575",
      p: "5px 0px",
      display: "inline"
    }
  })
  return (
    <VStack w="full" alignItems="flex-start" spaceY={7}>
      <HStack justifyContent="space-between">
          <Heading fontSize="30px" pl="10px">
              Tasa.
          </Heading>
          <IconButton 
              variant="ghost"
              onClick={onClose}
              m="0px"
              rounded="full"
              display={{base:"flex", lg:"none"}}
          >
              <CircleX />
          </IconButton>
      </HStack>

      <List.Root w="full" spaceY={1}>
        <LinkItem>
          <NavLink to="/">
            <IconButton bg="none" color="gray.400" size="md">
              <Calendar as="span"/>
            </IconButton>
            Dashboard
          </NavLink>
        </LinkItem>
        
        <LinkItem>
          <NavLink to="#">
            <IconButton bg="none" color="gray.400" size="md">
              <FolderDot/>
            </IconButton>
            Projects
          </NavLink>
        </LinkItem>

        <LinkItem>
          <NavLink to="/new-task">
            <IconButton bg="none" color="gray.400" size="md">
              <StickyNote />
            </IconButton>
            Task
          </NavLink>
        </LinkItem>

        <LinkItem>
          <NavLink to="/account">
            <IconButton bg="none" color="gray.400" size="md">
              <SquareUser />
            </IconButton>
            Account
          </NavLink>
        </LinkItem>

        <Separator />
        <LinkItem>
          <NavLink to="#">
            <IconButton bg="none" color="gray.400" size="md">
              <Settings />
            </IconButton>
            Settings
          </NavLink>
        </LinkItem>

        <LinkItem>
          <Button 
            w="full"
            colorScheme="green"
            justifyContent="flex-start"
            color="white"
            fontWeight="400"
            bg="green.600"
          >
            Logout
          </Button>
        </LinkItem>  
      </List.Root>
    </VStack>
    
  )
}

export default SideBar
