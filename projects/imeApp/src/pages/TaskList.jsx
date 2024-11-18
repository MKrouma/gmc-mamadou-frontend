import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Flex, Heading, List, HStack, Stack, Text, Button, Link  } from '@chakra-ui/react'

const TaskList = ({taskStorage}) => {
  const navigate = useNavigate()
  console.log("Task storage : ", taskStorage)

  if (taskStorage.length === 0 ) {
    return (
      <Box>
        <Text mb={3}>Todo list is empty</Text>
        <Button onClick={() => navigate("/")}>
          Add new task
        </Button>
      </Box>
    )
  }
  return (
    <>
    <Box
      h="full"
      w="400px"
      border="solid gray 1.5px"
      borderRadius="7px"
      p="40px 20px"
    >

      {taskStorage.map(task => (
        <Box 
          as="div"
          h="30px"
          w="100%"
          // p="20px"
          mb="20px"
          key={task.id}
          borderBottom="solid gray 0.5px"
          alignItems="flex-end"
        >
          <Link href={`/detail/${task.id}`} textDecor="None" h="full" w="full">
            <Text 
              fontSize="15px" fontWeight="500" 
              color={task.status === "completed" ? "green" : "black"}
            >
              {task.name}
            </Text> 
          </Link>
        </Box>
      
      ))}
    </Box>

    <Button onClick={() => navigate("/add-new")} mt="30px">
      Add new task
    </Button>
    </>
    
  )
}

export default TaskList
