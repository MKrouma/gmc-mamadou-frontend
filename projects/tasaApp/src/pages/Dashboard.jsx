import { Heading, Container, Box, Text, SimpleGrid } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <SimpleGrid columns={4} spaceX={10} spaceY={10}>
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>

      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>

      <Box bg="red" h="200px" border="1px solid"></Box>

    </SimpleGrid>
  );
};

export default Dashboard;