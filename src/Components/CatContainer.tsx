import React, { useEffect, useState } from 'react';
import { Box, ButtonGroup, Center, Container, Divider, Flex, IconButton, Image, Spacer, VStack } from '@chakra-ui/react';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { request } from "../Utilities/http-service"
import { NEW_CATS } from '../Utilities/constants';
import { CatImage } from "./CatImage";
import { CatDetails } from './CatDetails';

export const CatContainer = () => {
    const [cats, setCats] = useState<any[]>([]);
    const [currentCatIndex, setCurrentCatIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);

    const viewPreviousCat = () => {
        setCurrentCatIndex((previousCat) => {
            if(previousCat > 0) {
                return previousCat - 1;
            }
            return previousCat;
        })
    }

    const viewNextCat = () => {
        let maxCatIndex:number;
        setCurrentCatIndex((previousCatIndex) => {
            if(previousCatIndex < cats.length - 1) {
                ++previousCatIndex;
            }

            maxCatIndex = previousCatIndex;

            return previousCatIndex;
        });

        setMaxIndex((previousIndex) => {
            return Math.max(previousIndex, maxCatIndex);
        });
    }

    const viewNewCat = () => {
        setCurrentCatIndex((previousCatIndex) => {
            return Math.max(previousCatIndex + 1, maxIndex + 1);
        });
    }

    useEffect(() => {
        if(currentCatIndex > maxIndex && currentCatIndex < cats.length) {
            setMaxIndex(currentCatIndex);
        }
    }, [currentCatIndex, maxIndex])

    useEffect(() => {
        if(currentCatIndex >= cats.length - 2) {
            request(NEW_CATS)
            .then(newCats => {
                setCats([...cats, ...newCats])
            })
            .catch(error => {
                //TODO: Notify the user
            })
        }
    }, [currentCatIndex, cats])

    const atEnd = currentCatIndex >= cats.length - 1;
    const currentCat = cats[currentCatIndex];

    return (
            <Flex maxW='80%' minW='80%' alignItems='center' wrap='wrap' rowGap={2}>
                <Flex minWidth='100%' alignItems='center'>
                    <IconButton
                        aria-label="previous"
                        disabled={currentCatIndex == 0}
                        icon={<ChevronLeftIcon/>}
                        onClick={viewPreviousCat}
                    />
                    <Spacer />
                    <ButtonGroup gap={1}>
                        <IconButton
                            aria-label="next"
                            disabled={atEnd}
                            icon={<ChevronRightIcon/>}
                            onClick={viewNextCat}
                        />
                        <IconButton
                            aria-label="new"
                            disabled={atEnd}
                            icon={<ArrowRightIcon/>}
                            onClick={viewNewCat}
                        />
                    </ButtonGroup>
                </Flex>
                <Flex maxWidth='inherit' justify='center' minWidth='100%'>
                    {cats.length && <CatImage
                        url={currentCat.url}
                    />}
                </Flex>
                <Divider />
                {cats.length && <CatDetails cat={currentCat}/>}
            </Flex>
    )
}