import React, {useState} from "react";
import Title from './Componant/Title';
import Lable from "./Componant/Lable";
import Input from './Componant/Input';

function App() {
  const [input, setInput] = useState('');

  function handleInput(value) {
  setInput(value);
  
}

  return (
    <div className="App ">
      
        <Title title="Student Registration Form" />
        
      <form className="border-2 border-black w-[60%] mx-auto">
        <Lable lable="Student Full Name :"/>
        <Input placeHolder=" Name" dynamicWidth="30%" />
        <br/>
        <Lable lable="Address :"/>
        <Input placeHolder="Address" dynamicWidth="30%" />
        
        <br/>
        <Lable lable="Tp-Number :"/>
        <Input placeHolder="Tp-Number" dynamicWidth="30%" />
        <br/>
        <button className="border border-black">Submit</button>
      </form>

        <h1>{input}</h1>
    </div>
  );
}

export default App;


