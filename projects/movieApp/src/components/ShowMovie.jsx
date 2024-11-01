import { useState, useEffect } from 'react'
import { Input, Heading, Box, Flex, defineStyle, Field, Button } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import MovieList from "./MovieList"

const ShowMovie = ({moviesData}) => {
  const [newMovieData, setNewMovieData] = useState([])

  useEffect(() => {
    setNewMovieData(moviesData)
  })

  // state
  const [titleFilter, setTitleFilter] = useState("")
  const [noteFilter, setNoteFilter] = useState("")

  // handle state
  const handleTitleFilter = (event) => {
    event.preventDefault()
    setTitleFilter(event.target.value)
    console.log("Title FIlter: " + event.target.value)
  }

  const handleNoteFilter = (event) => {
    event.preventDefault()
    setNoteFilter(event.target.value)
    console.log("Note Filter: " + event.target.value)
  }


  const floatingStyles = defineStyle({
    pos: "absolute",
    bg: "bg",
    px: "0.5",
    top: "-3",
    insetStart: "2",
    fontWeight: "normal",
    pointerEvents: "none",
    transition: "position",
    _peerPlaceholderShown: {
      color: "fg.muted",
      top: "2.5",
      insetStart: "3",
    },
    _peerFocusVisible: {
      color: "fg",
      top: "-3",
      insetStart: "2",
    },
  })

  const  handleFilter = (event) => {
    console.log("Titre : " + titleFilter)
    console.log("Note : " + noteFilter)

    // filters
    const newMovies = moviesData.filter(
        movie => movie.title === titleFilter || movie.rating === noteFilter
    )
    console.log("Filter data : " + newMovies.length)

    setNewMovieData(newMovies)
  }

  return (
    <Box pb="50px">
      <Heading as="h2" fontSize="30px" mb="20px">Liste des films</Heading>
      <Flex fluid pb="20px">
        <Field.Root w="300px" mr="20px">
          <Box w="300px">
            <Input className="peer" placeholder="" onChange={handleTitleFilter}/>
            <Field.Label css={floatingStyles}>Filtre par title</Field.Label>
          </Box>
        </Field.Root>

        <Field.Root w="300px" mr="20px">
          <Box w="300px">
            <Input className="peer" placeholder="" onChange={handleNoteFilter}/>
            <Field.Label css={floatingStyles}>Filtre par note</Field.Label>
          </Box>
        </Field.Root>

        <Field.Root w="400px">
            <Button type="submit" onClick={handleFilter}>Filtrer</Button>
        </Field.Root>

      </Flex>

      <Flex fluid wrap="wrap" gap="10">
          <MovieList as="div"
            movieData={newMovieData}
          />
      </Flex>
    </Box>
    
  )
}

export default ShowMovie