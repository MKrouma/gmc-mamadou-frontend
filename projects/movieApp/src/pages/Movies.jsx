import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, AspectRatio, Flex } from "@chakra-ui/react"
import moviesData from '../data/movies';

const Movies = () => {
  const params = useParams();
  const navigate = useNavigate()


  const movieId = params.id
  console.log("Request params : ", movieId)

  // fetch movie from data 
  const movie = moviesData.filter(elt => elt.key==movieId)[0]
  const trailerLink = movie.trailer
  console.log("filter movie : ", movie)

  return (
    <Flex h="full" alignItems="center" flexDirection="column">
        <AspectRatio w="600px">
            <iframe
            title="Demo Video"
            src={trailerLink}
            allowFullScreen
            />
        </AspectRatio>

        <Button 
            variant="solid" mt={2}
            onClick={() => navigate("/")}
        >
            Page d'accueil
        </Button>
    </Flex>
  )
}

export default Movies
