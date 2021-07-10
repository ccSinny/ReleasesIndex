import React from "react";
import { useColorMode, Button, Flex, Box, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";

import DarkModeSwitch from "../components/DarkModeSwitch";
import SearchButton from "./SearchButton";
import Footer from "./Footer";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "transparent",
    dark: "transparent",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  const navHoverBg = {
    light: "blue.300",
    dark: "blue.600",
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        borderRadius="25px"
        bg="#171717"
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/movies" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Movies
            </Button>
          </NextLink>
          <NextLink href="/tvshows" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Tv Shows
            </Button>
          </NextLink>
          <NextLink href="/shareduniverses" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Shared Universes
            </Button>
          </NextLink>
        </Box>
        <Stack direction="row">
          <SearchButton />
          <DarkModeSwitch />
        </Stack>
      </StickyNav>
      <Flex
        as="main"
        minH="calc(100vh - 200px)"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Container;
