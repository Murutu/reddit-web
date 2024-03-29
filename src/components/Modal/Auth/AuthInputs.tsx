import { authModalState } from '@/atoms/authModalAtom';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import Login from './Login';
import SignUp from './SignUp';

type AuthInputsProps = {
    
};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const [modalState] = useRecoilState(authModalState);
    
    return (
        <Flex direction="column" align="center" width="100%" mt={4}>
            {modalState.view === "login" && <Login />}
            {modalState.view === "signup" && <SignUp />}
        </Flex>
    )
}
export default AuthInputs;

/*
Control which modal I'm going to see -> {modalState.view === "login" && <Login />}
This keeps our code very clean & readable 
*/