import React from 'react'
import { Box, Flex, Heading, List  } from '@chakra-ui/react'
import tasks from '../data/tasks'

const TaskList = () => {
  console.log("Tasks : ", tasks)

  return (
    <Box
      h="400px"
      w="400px"
      border="solid gray 1.5px"
      borderRadius="7px"
      px={3}
      py={3}
    >
        <List.Root>
          <List.Item>{tasks[0].name}</List.Item>
          <List.Item>{tasks[1].name}</List.Item>
        </List.Root>
    </Box>
  )
}

export default TaskList
