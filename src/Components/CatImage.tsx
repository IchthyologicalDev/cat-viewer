import React from 'react';
import { ButtonGroup, Center, Container, Flex, IconButton, Image, Spacer, VStack } from '@chakra-ui/react';

export const CatImage = ({url}:{url:string}) => {
    return <Image 
        src={url} 
        alt="A random cat!" 
        fit="contain"
        maxWidth='inherit'
        align='center'
        />
}