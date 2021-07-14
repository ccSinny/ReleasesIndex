import Container from "../components/Container";
import Head from "next/head";
import MovieCard from "../components/MovieCard";
import React from "react";
import { request, gql } from "graphql-request";
import { SimpleGrid, Text } from "@chakra-ui/react";

function Movies({ movies }) {
  console.log(movies);
  return (
    <React.Fragment>
      
      <Container>
        <Head>
          <title>Movies</title>
        </Head>
        <Text fontSize="5xl" textAlign="center" as="ins" color="blue.500" fontWeight="700">Movies</Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={2}>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </SimpleGrid>
      </Container>
    </React.Fragment>
  );
}

const MOVIES_QUERY = gql`
  query MyQuery {
    movies {
      id
      synopsis
      releaseDate
      title
      genre
      rating
      images {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const data = await request(
    "https://api-eu-central-1.graphcms.com/v2/ckq0ze7uj08mu01xo6d7t35oc/master",
    MOVIES_QUERY
  );
  const { movies } = data;
  return {
    props: {
      movies,
    },
  };
}

export default Movies;
