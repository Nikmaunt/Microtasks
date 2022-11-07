import React from 'react';

type ButtonType = {
    name:string
    callback: ()=> void
}

export const Button = (props:ButtonType) => {
    const onClickButtonHandler = () => {
        props.callback()
    }

    return (
        <div>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </div>
    );
};
