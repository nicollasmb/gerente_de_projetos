import { Button } from '@mantine/core';
import React from 'react';
import axios from 'axios';




const form = {
  taskName: "Nome Teste",
  taskDescription: "descrição Teste"
};



const getProfileAndToken = () => {
  const profileUrl = url;
  
  axios
    .get(profileUrl)
    .then((response) => {
      const userData = response.data; // Assuming the response contains both profile and token
      console.log(userData.profile); // Assuming the profile data is in the 'profile' property
      console.log(userData.token);

      // Call the handleSubmit function with the obtained token
      handleSubmit(userData.token);
    })
    .catch((error) => {
      console.log('Error fetching profile and token:', error);
    });
};

const handleSubmit = (token) => {
  const data = form;
  console.log(data);
  const url = url;

  axios
    .post(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(() => {
      console.log('success');
    })
    .catch(() => {
      console.log('deu erro');
    });
};


function DragAndDrop(){

  return (
    <Button type="submit" radius="md" mt="0.5rem" onClick={() => getProfileAndToken()}>
               Login
              </Button>
     
    

  );
};

export default DragAndDrop;
