import Container from "../components/Container";
import Head from "next/head";
import MovieCard from "../components/MovieCard";
import React from "react";
import { request, gql } from "graphql-request";

function Movies({ movies }) {
  console.log(movies);
  return (
    <React.Fragment>
      <Container>
        <Head>
          <title>Movies</title>
        </Head>

        <div>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </Container>
    </React.Fragment>
  );
}

const MOVIES_QUERY = gql`
  query MyQuery {
    movies {
      id
      description
      releaseDate
      title
      genre
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
