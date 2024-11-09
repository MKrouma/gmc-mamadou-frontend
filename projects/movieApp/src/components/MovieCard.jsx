import { Button, Card, Image, Text, Link  } from "@chakra-ui/react"

const MovieCard = (props) => {
  const { id, title, description, posterURL, rating, isFullDescr=false } = props
  let newDescription = isFullDescr ? description : description.slice(0, 80) + " ..."

  console.log("props from moviecard : ", props)
  return (
    <Link href={`/movies/${id}`} _hover={{textDecor: "none"}}>
      <Card.Root w="350px"overflow="hidden">
        <Image
          src={posterURL}
          alt="Green double couch with wooden legs"
          h="200px" 
        />

        <Card.Body gap="2">
          <Card.Title>{title}</Card.Title>
          <Card.Description>{newDescription}</Card.Description>

          <Text textStyle="1xl" fontWeight="medium" letterSpacing="tight" mt="2">
            Note : {rating}
          </Text>
        </Card.Body>

        <Card.Footer gap="2">
          <Button variant="solid">Trailer</Button>
          <Button variant="ghost">Supprimer</Button>
        </Card.Footer>
      </Card.Root>
    </Link>
    
  )
}

export default MovieCard
