import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Text,
  Container,
  Group,
  Button,

  Anchor,
  Stack,

  Flex,

} from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';
import axios from 'axios';

export default function Login() {

  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });
  console.log(form.values)
  const handleSubmit = () => {
    const data = form.values;
    console.log(data)
    const url = 'url'
    axios
      .post(url, data)
      .then(() => {
        console.log('success');
      })
      .catch(() => {
        console.log('deu erro');
      });
  };


  



  const isMobile = useMediaQuery('(max-width: 767px)');


  return (


    <Flex h="100vh" bg="#F9F9F9" display={"flex"} direction={'row'}>
      {isMobile ? null : <Container ml="-2vh" style={{ width: '50%' }}>

        <img src={require("../img/login.png")} style={{ width: "112%", height: "100%" }}  ></img>

      </Container>}

        <Container w={{ base: '100%', lg:'34%' }}>
        <Container size="75%" my="27%">
    
  




        {/* <Container size={{ base: "25%", lg: "75%" }} my={22}> */}

          <Group position='center' spacing={"0rem"} mb="0.5rem">

            <img src={require("../img/logo.png")} style={{ width: "60%", height: "screen", marginBottom: "1.6rem" }}></img>

            <Text align="center" size="2.1rem" weight={1000} >
              Comece Agora!
            </Text>


            <Text mb="1rem" size="1.2rem" weight={500}>
              Insira suas informações aqui:
            </Text>

          </Group>

          {/* <Group grow mb="md" mt="md">
        
          </Group>

          <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}

          <form onSubmit={form.onSubmit(() => { })}>
            <Stack spacing={"0.5rem"}>

              <TextInput
                required 
                variant="filled"
                label="Nome"
                placeholder="Nome Completo"
                value={form.values.username}
                onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                error={form.errors.username && 'E-mail inválido'}
                radius="md"
              />

              <TextInput
                required
                variant="filled"
                label="Email"
                placeholder="seuemail@email.com"
                value={form.values.email}
                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                error={form.errors.email && 'E-mail inválido'}
                radius="md"
              />

              <PasswordInput
                required
                variant="filled"
                label="Senha"
                placeholder="Sua Senha"
                value={form.values.password}
                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                error={form.errors.password && 'A senha deve ter no mínimo 6 caracteres'}
                radius="md"
              />
              <Button type="submit" radius="md" mt="0.5rem" onClick={() => handleSubmit()}>
                Register
              </Button>
            </Stack>


            <Group position="center" mt="xl">
              <Anchor
                color="dimmed"
                size="sm"
                href="/login"

              >
                Já tem uma conta? Entre aqui
              </Anchor>

            </Group>
          </form>
          
        </Container>
       

      </Container>
   
    </Flex>



  );

}