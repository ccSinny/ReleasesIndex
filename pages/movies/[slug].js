import { Box, Text } from '@chakra-ui/react'
import { request, gql } from "graphql-request";

function MoviePost({ movies }) {
  return (
    <Box>{movies.title}</Box>
  )
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


export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: `{movies.title]` } }],
    fallback: true,
  };
}

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




export default MoviePost