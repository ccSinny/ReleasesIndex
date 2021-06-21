import Image from "next/image";
import classes from "./MovieCard.module.css";
import { Stack, StackDivider } from "@chakra-ui/react";

function MovieCard({ movie }) {
  
  return (
    <div className={classes.movieStyle}>
      <Stack
        direction="column"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={2}
        align="center"
      >
        <Image src={movie.images[0].url} width="200px" height="300px" />
        <h1>{movie.title}</h1>
        <h2>{movie.releaseDate}</h2>
        <h2>{movie.genre.map((genre) => <text>(genre)</text>)}</h2>
        <p>{movie.description}</p>
      </Stack>
    </div>
  );
}
export default MovieCard;
