/* eslint-disable react/no-children-prop */
import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from 'react';


type SearchInputProps = {
    
};

const SearchInput:React.FC<SearchInputProps> = () => {
    
    return (
    <Flex flexGrow={1} mr={2} align="center">
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' mb={1}/>}
            />
        <Input  
            placeholder='Search Reddit' 
            fontSize="10pt" 
            _placeholder={{ color: "gray.500"}}
            _hover={{
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500"
            }}
            _focus={{
                outline: "none",
                border: "1px solid",
                borderColor: "blue.500"
            }}
            height="34px"
            bg="gray.50"
        />
        </InputGroup>
    </Flex>
    )
}
export default SearchInput;

/*
Tip => ctrl + shift + p organizes or gets rid all your unused imports 
_placeholder enables us to access sudo classes using the _ underscore
*/