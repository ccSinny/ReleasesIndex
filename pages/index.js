import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'
import SearchModal from '../components/SearchModal'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Watching In Order</title>
      </Head>
      <Stack
        
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2} paddingTop="15px">For entertainment lovers..</Heading>
          <Text color={colorSecondary[colorMode]}>Please select from the movies or TV shows listed below, or search to specifically find what you want to watch. </Text>
        </Flex>
      </Stack>
    </Container>
    
  )
}