import React from 'react';

export const Cat = ({cat}:{cat:any}) => {
    return <img src={cat.url} alt="A random cat!" />
}