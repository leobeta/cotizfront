import {Button, Container} from '@mui/material';

import React from "react";
import { useNotification } from '../../context/notification.context';

export const HomePage: React.FC<{}> = () => {
  const { getError } = useNotification();
  
  const handleClick = () => {
    getError("Esto es un error");
  }


  return (
  <Container sx={{mt:9}} maxWidth="xl">
    <Button variant="contained" onClick={handleClick}>Home Page</Button>
  </Container>
  )
}