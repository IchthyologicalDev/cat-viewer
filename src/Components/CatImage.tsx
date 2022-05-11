import { Image } from "@chakra-ui/react";

export const CatImage = ({url}:{url:string}) => {
    return <Image 
        src={url} 
        alt="A random cat!" 
        fit="contain"
        maxWidth="inherit"
        align="center"
        />
}