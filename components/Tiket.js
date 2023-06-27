import { Flex, Heading } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import {List,ListItem} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'

export default function Tiket(){
    return<>
    <Box>
    <Flex direction="column" alignItems="center">
  <Heading as="h1" size="xl">ICE NINE KILLS</Heading>
  <Heading as="h2" size="md">TOUR</Heading>
</Flex>
    </Box>
<Box bg={"black"} color='red' height={800} >
  <Text fontSize='20px' textAlign='center'>Upcoming Dates</Text>
  <List ml={12}>
  <Flex align="center" justifyContent="space-between">
  <ListItem>Mon, JUN 26 Charleston Civic Center Coliseum</ListItem>
  <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
  <ListItem>Mon, JUN 26 Charleston Civic Center Coliseum</ListItem>
  <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
  <ListItem>Thu, JUN 29 Giant Center</ListItem>
  <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
  <ListItem>Fri, JUN 30 St. Joseph’s Health Amphitheater at Lakeview</ListItem>
  <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
  <ListItem>Sun, JUL 2 Bank of New Hampshire Pavilion</ListItem>
  <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
    <ListItem>Fri, JUN 30 St. Joseph’s Health Amphitheater at Lakeview</ListItem>
    <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
    <ListItem>Sun, JUL 2 Bank of New Hampshire Pavilion</ListItem>
    <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
    <ListItem>Mon, JUL 3 Chesapeake Employers Insurance Arena</ListItem>
    <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
    <ListItem>Wed, JUL 5 Petersen Events Center</ListItem>
    <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
    <ListItem>Thu, JUL 6 Explore Asheville Convention & Visitors Bureau</ListItem>
    <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
    <ListItem>Sat, JUL 8 Alliant Energy PowerHouse</ListItem>
    <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
    <ListItem>Sun, JUL 9 Peoria Civic Center</ListItem>
    <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
<Flex align="center" justifyContent="space-between">
    <ListItem>Tue, JUL 11 Red Rocks Amphitheatre</ListItem>
    <Flex mb={2}>
    <Button mr="2" colorScheme="black" border="2px solid red">PSVP</Button>
    <Button colorScheme="red">TICKETS & MORE</Button>
  </Flex>
</Flex>
  </List> 
  <Box>
<Flex justify='center'>
  <Button colorScheme='red' size='md' height='48px' width='800px' border='2px' mt={20}>Show ALL DATES</Button>
</Flex>
</Box>
</Box>
    </>
}