import React from 'react';

const Four = props => {
    if(isNaN(+`${props.id}`) === false) {
        return (
            <h1>The number is: {props.id}</h1>
        );
    }
    else {
        return(
            <h1>The word is: {props.id}</h1>
        )
    }
}

export default Four;