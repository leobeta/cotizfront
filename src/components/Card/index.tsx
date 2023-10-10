import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material";

import React from "react";

type CardProps = {
  image: string;
  name: string;
  status: string;
  species: string;
}

export const CardComponent: React.FC<CardProps> = ({image, name, status, species}) => {
  return (
    <Card>
      <CardMedia component={'img'} height={194} image={image} alt="image"/>
      <CardContent>
        <Typography variant="h4" sx={{mb: 1.5}}>{name}</Typography>
        <Divider />
        <Typography sx={{mt: 1.5}}>Status: {status}</Typography>
        <Typography sx={{mt: 1.5}}>Species: {species}</Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}