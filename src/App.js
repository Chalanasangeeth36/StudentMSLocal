
import React, { useState, useEffect } from "react";
import Title from "./Componant/Title";
import Lable from "./Componant/Lable";
import Input from "./Componant/Input";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [tpNumber, setTpNumber] = useState("");

  // useEffect(() => {
  //   setDisplayName(name);
  // },[name]);

  const handleClick=(e)=>{
    e.preventDefault()
    const student={stName:name ,stAddress: address,stTele: tpNumber}
    console.log(student);
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    alert("New Student added")
  })

}

  return (
    <div className="App ">

      <Title title="Student Registration Form" />

      <form className="border-2 border-black w-[60%] mx-auto">
        <Lable lable="Student Full Name :" />
        <Input placeHolder=" Name" dynamicWidth="30%" onChange={(e) => setName(e.target.value)} />
        <br />
        <Lable lable="Address :" />
        <Input placeHolder="Address" dynamicWidth="50%" onChange={(e) => setAddress(e.target.value)}/>

        <br />
        <Lable lable="Tp-Number :" />
        <Input placeHolder="Tp-Number" dynamicWidth="30%" onChange={(e) => setTpNumber(e.target.value)}/>
        <br />
        <button className="border border-black" type="submit" onClick={handleClick}>Submit</button>
      </form>


    </div>
  );
}

export default App;


