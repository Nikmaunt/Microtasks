import React from 'react';

 export type MoneyArrType = {
     copy:MoneyType[]
 }

type MoneyType = {
        banknots:string
        value: number
        number: string
}

 export const Money = (props:MoneyArrType) => {
    return (
        <div>
            <ul  >
                {props.copy.map((m) =>{
                    return (
                        <li style={{margin:'15px', }}><span style={{margin:'15px', }}>{m.number}</span>
                            <span style={{margin:'15px', }}>{m.value}</span>
                            <span style={{margin:'15px', }}>{m.banknots}</span>
                        </li>
                    )
                } )}
            </ul>

        </div>
    );
};

