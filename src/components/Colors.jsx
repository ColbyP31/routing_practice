import React from 'react';

const Colors = props => {
    if(isNaN(+`${props.id1}`) === false) {
        return (
            <h1>{props.id1} is not a word</h1>
        );
    }
    if(isNaN(+`${props.id2}`) === false) {
        return (
            <h1>{props.id2} is not a color</h1>
        );
    }
    if(isNaN(+`${props.id3}`) === false) {
        return (
            <h1>{props.id3} is not a color</h1>
        );
    }
    else {
        return(
            <div style={{backgroundColor: `${props.id3}`}}>
            <h1 style={{color: `${props.id2}`}}>The word is: {props.id1}</h1>
            </div>
        )
    }
}

export default Colors;