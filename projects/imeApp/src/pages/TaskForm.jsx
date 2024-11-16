import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Button, Card, Input, Stack, Text } from "@chakra-ui/react"
import { Field } from "../components/ui/field"

const emptyTask = {
  name : "", 
  description: ""
}

const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
}

const TaskForm = ({addTask}) => {
  const [task, setTask] = useState(emptyTask)
  const [status, setStatus] = useState(STATUS.IDLE)
  const navigate = useNavigate()

  // Derived state
  const errors = getErrors(task)
  const isValid = Object.keys(errors).length === 0

  const handleChange = (event) => {
    console.log(event.target.value)
    setTask((currTask) => {
      return {...currTask, [event.target.id]: event.target.value}
    })
  }

  const handleSubmit = (event) => {
    setStatus(STATUS.SUBMITTING)

    if (isValid) {
      addTask(task)
      setStatus(STATUS.COMPLETED)
      navigate("/")
    } else {
      setStatus(STATUS.SUBMITTED)
    }
  }

  function getErrors (task) {
    const result = {}
    if (!task.name) result.name = "Name is required!"
    if (!task.description) result.description = "Description is required!"

    return result
  }

  return (
    <Box>
      <Card.Root w="400px">
        <Card.Header>
          <Card.Title>Add todo</Card.Title>
        </Card.Header>

        <Card.Body>
            {!isValid && status === STATUS.SUBMITTED && (
              <Stack gap={0} mb={3} color="red">
                {Object.keys(errors).map(key => <Text key={key} role="alert">{errors[key]}</Text>)}
              </Stack>
            )}
        
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

        <Card.Footer justifyContent="center">
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
