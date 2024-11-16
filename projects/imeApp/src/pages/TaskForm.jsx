import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Button, Card, Input, Stack } from "@chakra-ui/react"
import { Field } from "../components/ui/field"

const emptyTask = {
  name : "", 
  description: ""
}

const TaskForm = () => {
  const navigate = useNavigate()
  const [task, setTask] = useState(emptyTask)

  const handleChange = (event) => {
    console.log(event.target.value)
    setTask((currTask) => {
      return {...currTask, [event.target.id]: event.target.value}
    })
  }

  const handleSubmit = (event) => {
    console.log("My task : ", task)
    navigate("/list")
  }

  return (
    <Box>
      <Card.Root w="400px">
        <Card.Header>
          <Card.Title>Add todo</Card.Title>
        </Card.Header>

        <Card.Body>
          <Stack gap="4" w="full">
            <Field label="Name">
              <Input 
                id='name'
                value={task.name}
                onChange={handleChange}
              />
            </Field>
            <Field label="Description" textAlign="start">
              <Input 
                h="100px"
                id='description'
                value={task.description}
                onChange={handleChange}
              />
            </Field>
          </Stack>
        </Card.Body>

        <Card.Footer justifyContent="flex-end">
          <Button 
            variant="solid"
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Card.Footer>
      </Card.Root>
    </Box>
  )
}

export default TaskForm
