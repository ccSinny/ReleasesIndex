import { Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SearchModal from './SearchModal';
import { useState } from 'react';

const SearchButton = (  ) => {
    const [isModalOpen, setIsModalOpen] = useState(false) 
  return (
      <>
    <Button
      leftIcon={<SearchIcon />}
      colorScheme="blue"
      variant="outline"
      onClick={() => setIsModalOpen(true)}
    >
      Search...
    </Button>
    <SearchModal isOpen={isModalOpen} closeHandler={() => setIsModalOpen(false)}/>
    </>
  );
};

export default SearchButton;
