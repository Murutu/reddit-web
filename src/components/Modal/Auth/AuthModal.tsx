import { authModalState } from '@/atoms/authModalAtom';
import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';



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
            <ModalHeader textAlign="center">
              {modalState.view === "login" && "Login"}
              {modalState.view === "signup" && "Sign up"}
              {modalState.view === "resetPassword" && "Reset Password"}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody 
              display="flex" 
              flexDirection="column" 
              alignItems="center" 
              justifyContent="center"
              pb={6}
              >
              <Flex 
                direction="column" 
                align="center" 
                justify="center"
                width="70%"
                >
                  <OAuthButtons />
                  <Text color="gray.400" fontWeight={700}>OR</Text>
                  <AuthInputs />
                </Flex>
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
modalState => state value || setModalState => state function
useRecoilState(authModalState) => makes it global

In isOpen={on.Open} im going to change it to now isOpen={modalState.open} bcz 
im now using whats on my interface {open} to be specific

Were going to spread (...prev,) it bcz we only want to modify a single part of that 
piece of state and that piece is going to set it to false

{modalState.view === "login" && "Login"} -> if its equal to login show the text Login
*/