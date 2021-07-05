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

const MOVIE_SEARCH_QUERY = gql`
query MyQuery($searchString: String!){
  movies(where: {title_contains: $searchString}) {
    title
    releaseDate
    rating
  }
}
`

const SearchModal = ({ isOpen, closeHandler }) => {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if(searchString) {
      request("https://api-eu-central-1.graphcms.com/v2/ckq0ze7uj08mu01xo6d7t35oc/master", MOVIE_SEARCH_QUERY, {searchString}).then(({movies}) => setSearchResults(movies))
    }
  }, [searchString]);
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />  
        <ModalBody>
        
        <Input placeholder='Search...' variant="flushed" value={searchString} onChange={e => setSearchString(e.target.value)} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
