import Image from "next/image";
import { Stack, Divider, Text, Box } from "@chakra-ui/react";

const SearchMovieCard = ({image, title, releaseDate, rating}) => {
  return (
    <Box p='10px' m='auto' maxH='800px' w='auto' fontFamily='Montserrat' border='5px solid' borderColor='rgba(143, 183, 241, 0.3)' borderRadius='20px' bgColor='#171717'>
      <Stack
        direction="row"
        spacing={2}
        align="center"
      >
        <Image src={image} width="200px" height="300px" />
        <Stack>
          <div>
            <Text as='h1' fontSize='1.5rem' fontWeight='700' color='blue.200'>{title}</Text>
            <Divider  borderColor="blue.200" maxW='200' borderBottomWidth='5px' opacity='10%' m='auto' borderRadius='10px' />
          </div>
          <h2>{releaseDate}</h2>
          <h2>{rating}</h2>
        </Stack>
        </Stack>
    </Box>
  )
}

export default SearchMovieCard