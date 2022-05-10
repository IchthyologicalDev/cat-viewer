import { Flex } from "@chakra-ui/react";
import { Breed } from "../Models/types"
import { Detail } from "./Detail";

export const CatDetails = ({cat}:{cat:any}) => {
    const breed:Breed = cat.breeds?.[0];
    let name, temperament, origin, description;

    if(breed) {
        name = breed.name;
        temperament = breed.temperament;
        origin = breed.origin;
        description = breed.description;
    }
    return <Flex>
        <div>
            <p>Url: {cat.url}</p>
            <Detail label='Breed' text={name} /> 
            <Detail label='Temperament' text={temperament} /> 
            <Detail label='Origin' text={origin} /> 
            <Detail label='Description' text={description} /> 
        </div>
    </Flex> 
}