import {Button, Container} from '@mui/material';

import { HeaderComponent } from '../../components';
import React from "react";

export const HomePage: React.FC<{}> = () => {
  return (
  <Container sx={{mt:9}} maxWidth="xl">
    <HeaderComponent title='Hola Home' description='Hola Home bienvenido a truevice.' element={<Button fullWidth variant='contained'>Hola Home</Button>} />
  </Container>
  )
}