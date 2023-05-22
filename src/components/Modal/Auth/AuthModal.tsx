import { authModalState } from '@/atoms/authModalAtom';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';



const AuthModal:React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);

    const handleClose = () => {
      setModalState(prev => ({
        ...prev,
        open: false
      }))
    };

    return (
      <>

        <Modal isOpen={modalState.open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Here is the Modal Body
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}
export default AuthModal;

/*
This is all I have to do to set up global state
const [modalState, setModalState] = useRecoilState(authModalState) 
modalState => state value setModalState => state function
useRecoilState(authModalState) => makes it global

In isOpen={on.Open} im going to change it to now isOpen={modalState.open} bcz 
im now using whats on my interface {open} to be specific

Were going to spread (...prev,) it bcz we only want to modify a single part of that 
piece of state and that piece is going to set it to false
*/