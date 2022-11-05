import React from 'react';
import {FilterType} from "./App";



type ButtonType = {
    name: FilterType
    callback:  (buttonName:FilterType) => void
}

 export const Button = (props:ButtonType) => {
     const onClickHandler = () =>{props.callback(props.name)}
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default Button;