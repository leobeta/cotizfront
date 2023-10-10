import { Box, Button, CircularProgress, Container, Grid, Pagination } from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";

import React from "react";
import { TypeCharacter } from "./interface/character.interface";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((r) => {
        setCount(r.data.info.pages);
        setAllCharacters(r.data.results);
        setTimeout(() => setLoading(false), 1000)
      })
      .catch((e) => {
        console.error(e);
      });
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Hola Home"
        description="Hola Home bienvenido a truevice."
        element={
          <Button fullWidth variant="contained">
            Hola Home
          </Button>
        }
      />
      {
        loading ? (
          <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
            <CircularProgress/>
          </Box>
        ) : (
        <>
          <div>
            {allCharacters && allCharacters.length !== 0 ? (
              <Grid container spacing={2} direction={"row"}>
                {allCharacters.map((character) => (
                  <Grid item xs={3} key={character.id}>
                    <CardComponent
                      image={character.image}
                      name={character.name}
                      status={character.status}
                      species={character.species}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <div>No existe data</div>
            )}
          </div>
          <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Pagination variant="outlined" color="primary" count={count} page={page} onChange={handleChange} sx={{mb: 3}} size="large"/>
          </Box>
          </>
          )
      } 
    </Container>
  );
};
