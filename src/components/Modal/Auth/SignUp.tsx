import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Button, Flex, Input, Text } from '@chakra-ui/react';

import { authModalState } from '@/atoms/authModalAtom';
import { useRecoilState } from 'recoil';

import { auth } from "../../../firebase/clientApp";

type SignUpProps = {
    
};

const SignUp:React.FC<SignUpProps> = () => {
    const [_, setAuthModalState ] = useRecoilState(authModalState);

    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth);

    /* 
    Firebase Logic
    We do return to make sure the function has been executed first before proceeding to the next one
            {error && (
            <Text textAlign="center" color="red" fontSize="10pt">{error}</Text>
        )} => Don't display error message text unless the error exists

        Type of event(event:React.FormEvent) & type of html element that is producing the React.FormEvent is <HTMLFormElement>
    */
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(error) setError("");
        if(signUpForm.password !== signUpForm.confirmPassword) {
            setError(" Passwords do not match ");
            return;
        }

        // password match
        createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
    };

    const onChange = (event:React.ChangeEvent<HTMLImageElement>) => {
        // update state form
        setSignUpForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    
    return (
        <form onSubmit={onSubmit}>
        <Input
            required
            name="email" 
            placeholder="email" 
            type="email" 
            mb={2} 
            onChange={onChange}
            fontSize="10pt"
            _placeholder={{ color: "gray.500"}}
            _hover={{
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500"
            }}
            _focus={{
                outline: "none",
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500"
            }}
            bg="gray.50"
        />
        <Input
            required
            name="password"
            placeholder="password"
            type="password"
            onChange={onChange}
            fontSize="10pt"
            _placeholder={{ color: "gray.500"}}
            _hover={{
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500"
            }}
            _focus={{
                outline: "none",
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500"
            }}
            bg="gray.50"
        />
        <Input
            required
            name="confirmPassword"
            placeholder="confirm password"
            type="password"
            onChange={onChange}
            fontSize="10pt"
            mt={2}
            _placeholder={{ color: "gray.500"}}
            _hover={{
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500"
            }}
            _focus={{
                outline: "none",
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500"
            }}
            bg="gray.50"
        />
        {error && (
            <Text textAlign="center" color="red" fontSize="10pt">{error}</Text>
        )}
        <Button
            width="100%"  
            type="submit"
            isLoading={loading}
            mt={2}
            mb={2}
        >
            Sign Up
        </Button>
        <Flex fontSize="9pt" justifyContent="center">
            <Text mr={1}>Already have an account ? </Text> 
            <Text 
                color="blue.500" 
                fontWeight={700} 
                cursor="pointer"
                onClick={() => setAuthModalState(prev => ({
                    ...prev,
                    view: "login"
                }))}
            >Log In</Text>
        </Flex>
    </form>
    )
}
export default SignUp;