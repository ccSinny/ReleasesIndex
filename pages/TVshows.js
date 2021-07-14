import Container from "../components/Container";
import Head from "next/head";
import React from "react";
import { request, gql } from "graphql-request";
import { SimpleGrid, Text } from "@chakra-ui/react";

function TVshows() {
  return (
    <React.Fragment>
      <Container>
        <Head>
          <title>TV Shows</title>
        </Head>
        <Text fontSize="5xl" textAlign="center" as="ins" color="blue.500" fontWeight="700">TV Shows</Text>
      </Container>
    </React.Fragment>
  );
}

export default TVshows