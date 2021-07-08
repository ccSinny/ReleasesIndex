import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { request, gql } from "graphql-request";
import SearchMovieCard from "./SearchMovieCard";

const MOVIE_SEARCH_QUERY = gql`
  query MyQuery($searchString: String!) {
    movies(where: { title_contains: $searchString }) {
      title
      releaseDate
      rating
      images {
      url 
      }
    }
  }
`;

const SearchModal = ({ isOpen, closeHandler }) => {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchString) {
      request(
        "https://api-eu-central-1.graphcms.com/v2/ckq0ze7uj08mu01xo6d7t35oc/master",
        MOVIE_SEARCH_QUERY,
        { searchString }
      ).then(({ movies }) => setSearchResults(movies));
    }
  }, [searchString]);
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Search..."
            variant="flushed"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          {searchResults.map((movie) => (
            <SearchMovieCard
              image={movie.images[0].url}
              title={movie.title}
              releaseDate={movie.releaseDate}
              rating={movie.rating}
            />
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
