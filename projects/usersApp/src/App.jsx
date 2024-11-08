import axios from 'axios'
import { useState, useEffect } from 'react'
import { Avatar } from "./components/ui/avatar"
import { Button } from "./components/ui/button"
import { Box, Flex, Card, Center, Link } from '@chakra-ui/react'

function App() {
  const [listOfUSer, setListOfUSer] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {

    function fetchData() {
      let baseURL = "https://jsonplaceholder.typicode.com/users"

      axios.get(baseURL)
      .then(res => res.data)
      .then(res => setListOfUSer(res))
      .catch(err => setError(err));
    }

    fetchData();

  }, []);

  console.log("Hey data : ", listOfUSer)

  return (
    <Box bg="blue.100" minH="100dvh" p="10">
      <Flex flexWrap={"wrap"} gap={3} justifyContent="center" alignItems="center">
        {listOfUSer.map(user => (

          <Card.Root width="320px">
            <Card.Body gap="2">
              <Avatar
                src={`https://picsum.photos/200/${user.id}`}
                name="Nue Camp"
                size="lg"
                shape="rounded"
              />
              <Card.Title mt="2">{user.name}</Card.Title>
              <Card.Description>{user.email}</Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="start">
              <Link href={user.website} _hover={{textDecor:"none"}}>
                <Button variant="outline">Website</Button>
              </Link>
              <Button>Ajouter</Button>
            </Card.Footer>
          </Card.Root>

        ))}
      </Flex>
    </Box>
  )
}

export default App
