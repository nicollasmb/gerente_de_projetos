
import { Container, Checkbox, Button, Flex } from "@mantine/core";
import axios from "axios";

export default function TaskListModule(){
const userTasks = [
    {
      id: 'task1',
      name: 'Task 1',
      isflaged: false,
    },
    {
      id: 'task2',
      name: 'Task 2',
      isflaged: true,
    },
    {
      id: 'task3',
      name: 'Task 3',
      isflaged: true,
    },
    {
      id: 'task4',
      name: 'Task 4',
      isflaged: true,
    },
  ];


  return (
    <Flex borderRadius="10px" mt="5%">
      <Container  borderRadius="12px" w="30%" h="40rem" bg="white" p="2rem">
        <Flex direction="column" gap="0.5rem"h="100%" >
          {userTasks.map(({ id, name, isflaged }) => (
            <Container
              key={id}
              bg="#228be6"
              h='10%'
              borderWidth="50rem"
              borderRadius="lg"
              overflow="hidden"
              m={1}
              display="flex"
              flexDirection="column"
              alignItems="center"
              p="1rem"
             
            >
              {isflaged ? (
                <Checkbox defaultChecked size="md" mr={2} />
              ) : (
                <Checkbox size="md" mr={4} />
              )}
              <Container fontWeight="semibold" fontSize="xl">
                {name}
              </Container>
            </Container>
          ))}
        </Flex>
      </Container>
      <Container borderRadius="12px" w="30%" h="40rem" bg="white"></Container>
      <Container borderRadius="12px" w="30%" h="40rem" bg="white"></Container>



    </Flex>
  );
}
