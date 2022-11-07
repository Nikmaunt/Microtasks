import React, {useState} from 'react';

import './App.css';
import Input from "./Components/Input";
import {FullInput} from "./Components/FullInput";
import {Button} from "./Components/Button";


function App() {
        let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ])

    let [title, setTitle] = useState('')


   const addMessage = (title:string ) => {
        let newMessage = {message: title}
       setMessage([newMessage,...message])

    }

const callbackButtonHandler = () => {
addMessage(title)
    setTitle('')
}


  return (
    <div className="App">
       {/*<FullInput addMessage={addMessage}/>*/}
        <Input title={title} setTitle ={setTitle} />
        <Button name={"Add messaage"} callback={callbackButtonHandler}/>

        {message.map((el, index)=> {
            return (
                <div key={index}>{el.message}</div>
            )
        })}
    </div>
  );
}

export default App;
