import {Box, Button, Container, Grid, Paper, TextField, Typography} from '@mui/material';

import { LoginValidate } from '../../utils/validateForm';
import React from "react";
import { useNotification } from '../../context/notification.context';

type LoginType = {
  username: string;
  password: string;
}

export const LoginPage: React.FC<{}> = () => {
  const { getError, getSuccess } = useNotification();
  const [loginData, setLoginData] = React.useState<LoginType>({
    username: '',
    password: ''
  })

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    LoginValidate.validate(loginData).then(() => {
      getSuccess(JSON.stringify(loginData));
    }).catch((error) => {
      getError(error.message);
    })
  }

  return (
    <Container maxWidth="sm">
      <Grid container
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{minHeight: '100vh'}}>
          <Grid item>
            <Paper sx={{padding: '1.2em', borderRadius: '0.5em'}}>
              <Typography sx={{mt: 1, mb: 1}} variant='h4'>Truevice Login</Typography>
              <Box component={'form'} onSubmit={handleSubmit}>
                <TextField margin='normal' name='username' fullWidth label='Username' sx={{mt: 2, mb: 1.5}} type='text' onChange={dataLogin}/>
                <TextField margin='normal' name='password' fullWidth label='Password' sx={{mt: 1.5, mb: 1.5}} type='password' onChange={dataLogin} />
                <Button type='submit' fullWidth variant='contained' sx={{mt: 1.5, mb: 3}}>Login</Button>
              </Box>
            </Paper>
          </Grid>
      </Grid>
    </Container>
  )
}