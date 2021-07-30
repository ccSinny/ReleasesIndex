import Container from "../../components/Container";
import Head from "next/head";
import MovieCard from "../../components/MovieCard";
import React, { useState } from "react";
import { request, gql } from "graphql-request";
import { SimpleGrid, Text } from "@chakra-ui/react";
import Filters from "../../components/Filters";
import filter from "lodash/filter";

function Movies({ movies }) {
  const [activeRatingFilters, setActiveRatingFilters] = useState([]);
  const [activeGenreFilters, setActiveGenreFilters] = useState([]);
  const filteredMovies = filter(
    movies,
    (movie) =>
      (activeGenreFilters.length === 0 ||
        movie.genre.some((g) => activeGenreFilters.includes(g))) &&
      (activeRatingFilters.length === 0 ||
        activeRatingFilters
          .map((value) => parseFloat(value))
          .includes(movie.rating))
  );
  return (
    <React.Fragment>
      <Container>
        <Head>
          <title>Movies</title>
        </Head>
        <Text
          fontSize="5xl"
          textAlign="center"
          as="ins"
          color="blue.500"
          fontWeight="700"
        >
          Movies
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={2}>
          {filteredMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </SimpleGrid>
        <Filters
          activeRatingFilters={activeRatingFilters}
          setActiveRatingFilters={setActiveRatingFilters}
          activeGenreFilters={activeGenreFilters}
          setActiveGenreFilters={setActiveGenreFilters}
        />
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
    process.env.NEXT_PUBLIC_GRAPHCMS_PROJECT_API,
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
