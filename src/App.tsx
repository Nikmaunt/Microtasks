import React, {MouseEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import {Money} from "./Money";
import button from "./Button";


export type FilterType = 'Dollars' | 'RUBLS' | 'ALL'

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('ALL')
    let copy = money
    if (filter === 'Dollars') {
        copy = money.filter((m) => m.banknots === "Dollars")
    }
    if (filter === 'RUBLS') {
        copy = money.filter((m) => m.banknots === "RUBLS")
    }
    const ButtonHandler = (buttonName: FilterType) => {
        setFilter(buttonName)
    }

    return (
        <div className="App">
            <Money copy={copy}/>
            <Button name={'Dollars'} callback={ButtonHandler}/>
            <Button name={'ALL'} callback={ButtonHandler}/>
            <Button name={'RUBLS'} callback={ButtonHandler}/>
        </div>
    );
}

export default App;
