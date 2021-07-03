import Image from "next/image";
import { Stack, Divider, Text, Button, Box } from "@chakra-ui/react";
import React, { useState } from "react";

function MovieCard({ movie }) {
  const [showDescription, setShowDescription] = useState(false);
  
  return (
    <Box p='10px' m='auto' maxH='800px' w='auto' fontFamily='Montserrat' border='5px solid' borderColor='rgba(143, 183, 241, 0.3)' borderRadius='20px' bgColor='#171717'>
      <Stack
        direction="column"
        spacing={2}
        align="center"
      >
        <Image src={movie.images[0].url} width="200px" height="300px" />
        <div>
          <Text as='h1' fontSize='1.5rem' fontWeight='700' color='blue.200'>{movie.title}</Text>
          <Divider  borderColor="blue.200" maxW='200' borderBottomWidth='5px' opacity='10%' m='auto' borderRadius='10px' />
        </div>
        <h2>{movie.releaseDate}</h2>
        <h2>
          <Text>
            {movie.genre.map((g, index) => (
              `${g.replace(/_/g, " ")}${index===movie.genre.length-1 ? '' : ', '}`
            ))}
          </Text>
        </h2>
        {showDescription ? (
          <p>{movie.synopsis}</p>
        ) : (
          //#FIXIT need to make button stay and not disappear
          <Button 
            onClick={() => setShowDescription(true)}
            variant="outline"
            colorScheme="blue"
            p={[1, 2, 4]}
          >
            Synopsis
          </Button>
        )}
      </Stack>
    </Box>
  );
}
export default MovieCard;
