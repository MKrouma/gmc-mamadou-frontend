import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Flex, Heading, Button, Text, Link  } from '@chakra-ui/react'


const TaskItem = ({taskStorage, deleteTask, completeTask}) => {
  const {id} = useParams()
  const navigate = useNavigate()

  const task = taskStorage.find(task => task.id === parseInt(id))
  const isCompleted = task["status"] === "completed"

  const handleDelete = (e) => {
    e.preventDefault()
    alert("DO you want to delete this item ?")
    deleteTask(task.id)
    navigate("/")
  }

  const handleComplete = (e) => {
    e.preventDefault()
    console.log("Hey task after complete : ", task)
    completeTask(task.id)
  }

  if (!task) return <Text>No item find in database.</Text>
  return (
    <>
      <Box 
        as="div"
        h="300px"
        w="300px"
        // p="20px"
        // mb="20px"
        key={task.id}
      >
        <Box w="100%" h="200px" 
          py="2px" px={3}
          border="solid gray 0.5px" borderRadius="5px" 
        >
          <Text fontSize="15px" fontWeight="500">
            {task.name}
          </Text>

          <Text fontSize="13px" color="gray.500">
            {task.description}
          </Text> 
        </Box>

        {!isCompleted && (
          <Flex pt="10px">
            <Button h="30px" minW="50px" mr="5px">Edit</Button>

            <Button 
              h="30px" minW="50px" colorPalette={"green"} mr="5px"
              onClick={handleComplete}
            >
              Complete
            </Button>

            <Button 
              h="30px" minW="50px" colorPalette={"red"}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Flex> 
        )}
        
      </Box>
      <Button onClick={() => navigate("/")}>
        View todo list
      </Button>
    </>
  )
}

export default TaskItem
