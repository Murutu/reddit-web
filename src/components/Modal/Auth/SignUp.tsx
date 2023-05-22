import React, { useState } from 'react';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { authModalState } from '@/atoms/authModalAtom';
import { useRecoilState } from 'recoil';

type SignUpProps = {
    
};

const SignUp:React.FC<SignUpProps> = () => {
    const [_, setAuthModalState ] = useRecoilState(authModalState);

    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onSubmit = () => {};

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

        <Button
            width="100%"  
            type="submit"
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