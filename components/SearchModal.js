import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const SearchModal = ({ isOpen, closeHandler }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
        
        <Input placeholder='Search...' variant="flushed" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
