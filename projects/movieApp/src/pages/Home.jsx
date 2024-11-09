import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { 
  HStack, Flex, Heading, Container, Box, defineStyle
} from "@chakra-ui/react"
import { NumberInputField, NumberInputRoot } from "../components/ui/number-input"
import moviesData from '../data/movies'
import ShowMovie from '../components/ShowMovie'

import { Button, Input, Stack } from "@chakra-ui/react"
import { Field } from "../components/ui/field"



const Home = () => {
  // state 
  const [titleValue, setTitleValue] = useState("")
  const [descrValue, setDescrValue] = useState("")
  const [posterLinkValue, setPosterLinkValue] = useState("")
  const [noteValue, setNoteValue] = useState("")
  const [moviesDataValue, setMovieDataValue] = useState(moviesData)

  // // use effect 
  // useEffect(() => {
  //   setMovieDataValue(moviesData)
  // }, [])

  // handle input state change
  const handleTitle = (event) => {
    event.preventDefault()
    setTitleValue(event.target.value)
    console.log("Titre : " + event.target.value)
  }

  const handleDescr = (event) => {
    event.preventDefault()
    setDescrValue(event.target.value)
    console.log("Description : " + event.target.value)
  }

  const handlePoster = (event) => {
    event.preventDefault()
    setPosterLinkValue(event.target.value)
    console.log("Poster : " + event.target.value)
  }

  const handleNote = (event) => {
    // event.preventDefault()
    setNoteValue(event.value)
    console.log("Note : " + event.value)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // submit new movie
  const onSubmit = handleSubmit((event) => {
    console.log(titleValue + descrValue)

    // movie
    const movie = {
        key : moviesData.length +1, 
        title : titleValue,
        description : descrValue,
        posterURL : posterLinkValue,
        rating : noteValue
    }

    console.log("Movie : " + movie)

    // set movies values state
    setMovieDataValue([...moviesData, movie])
  })

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

  return (
    <Container fluid mt="30px">
      <Heading as="h1" fontSize="50px" pb="50px">Films ivoiriens</Heading>
      
      <Box pb="50px">
        <Heading as="h2" fontSize="30px" mb="20px">Ajouter un film</Heading>

        <form onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start" w="100%">
            <Field label="Titre">
                <Input
                    {...register("title", { required: "Le titre est requis" })}
                    value={titleValue}
                    onChange={handleTitle}
                />
            </Field>

            <Field label="Description">
                <Input
                    {...register("description")}
                    value={descrValue}
                    onChange={handleDescr}
                    h="80px"
                    paddingY="0"
                    textAlign='start'
                />
            </Field>

            <Field label="Lien du poster">
                <Input
                    {...register("posterLink")}
                    value={posterLinkValue}
                    onChange={handlePoster}                   
                />
            </Field>

            <Field label="Note">
                <NumberInputRoot 
                  onValueChange={handleNote}
                  w="100%" 
                  defaultValue="0" 
                  min={0} max={10}
                >
                    <NumberInputField />
                </NumberInputRoot>
            </Field>

            <Button type="submit" mt="10px">Envoyer</Button>
        </Stack>
        </form>
      </Box>

      <ShowMovie moviesData={moviesDataValue} />
    </Container>
  )
}

export default Home
