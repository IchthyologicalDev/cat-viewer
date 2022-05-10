import React, { useEffect, useState } from 'react';
import { Center, Image } from '@chakra-ui/react';

import { request } from "../Utilities/http-service"
import { NEW_CAT } from '../Utilities/constants';
import { Cat } from "./Cat";

export const CatContainer = () => {
    const [cats, setCats] = useState<any[]>([]);
    const [currentCat, setCurrentCat] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(currentCat >= cats.length - 2) {
            request(NEW_CAT)
            .then(newCats => {
                setCats([...cats, ...newCats])
            })
            .catch(error => {
                //TODO: Notify the user
            })
        }
    }, [currentCat, cats])

    return (
        <Center>
            {cats.length && <Cat
                cat={cats[currentCat]}
            />}
        </Center>
    )
}