import { Flex, Image } from "@chakra-ui/react";
import React from 'react';
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";


const Navbar:React.FC = () => {
    return (
        <Flex bg="white" height="44px" padding="6px 12px">
            <Flex align="center">
                <Image src="/images/redditFace.svg" height="30px"/>
                <Image 
                    src="/images/redditText.svg" 
                    height="46px" 
                    display={{ base: "none", md: "unset"}}
                />
            </Flex>
            <SearchInput />
            <RightContent />
        </Flex>
    )
}
export default Navbar;

/*
Flex is a div with css flexbox already applied to it out of the box
Chakra UI saves us alot of time writing out flexbox Styles over & over again
<Flex>
    navbar
</Flex>
*/