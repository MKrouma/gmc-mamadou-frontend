import { Button, Card, Image, Text } from "@chakra-ui/react"

const MovieCard = (props) => {
  const { title, description, posterURL, rating } = props
  return (
    <Card.Root w="350px"overflow="hidden">
      <Image
        src={posterURL}
        alt="Green double couch with wooden legs"
        h="200px" 
      />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>

        <Text textStyle="1xl" fontWeight="medium" letterSpacing="tight" mt="2">
          Note : {rating}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Regarder</Button>
        <Button variant="ghost">Supprimer</Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default MovieCard
