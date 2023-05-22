import React from 'react';
import { Button } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';



const AuthButtons:React.FC = () => {
    const [_ , setAuthModalState] = useRecoilState(authModalState);

    return (
        <>
        <Button 
            variant="outline"
            height="20px"
            display={{ base: "none", sm: "flex"}}
            width={{ base: "70px", md: "110px"}}
            mr={2}
            onClick={() => setAuthModalState({ open: true, view: "login"})}
        >Log In
        </Button>
        <Button 
            height="20px"
            display={{ base: "none", sm: "flex"}}
            width={{ base: "70px", md: "110px"}}
            mr={2}
            onClick={() => setAuthModalState({open: true, view: "signup"})}
        >Sign Up
        </Button>
        </>
    )
}
export default AuthButtons;

/*
when I click the modal view it is going to show login -> onClick={() => setAuthModalState({ open: true, view: "login"})}
when I click the modal view it is going to show signuo -> onClick={() => setAuthModalState({ open: true, view: "signup"})}
*/