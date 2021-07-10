import Container from "../components/Container";
import Head from "next/head";
import React from "react";
import { request, gql } from "graphql-request";
import { SimpleGrid, Text } from "@chakra-ui/react";

function SharedUniverses() {
  return (
    <React.Fragment>
      <Container>
        <Head>
          <title>Shared Universes</title>
        </Head>
        <Text fontSize="5xl" textAlign="center" as="ins">Shared Universes</Text>
      </Container>
    </React.Fragment>
  );
}

export default SharedUniverses