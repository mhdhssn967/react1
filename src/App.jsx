import { useState } from "react";
import './App.css'

import React from 'react'


const App = () => {
  const [bgcolor1,setBgColor1]=useState("#ffffff")
  const [bgcolor2,setBgColor2]=useState("#ffffff")


  const randomColor1=()=>{
    const letters='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
      color+=letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color
  }

  const randomColor2=()=>{
    const letters='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
      color+=letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color
  }

  const changeColor=()=>{
    setBgColor1(randomColor1())
    setBgColor2(randomColor2())
  }
  return (
    <div className="app" style={{width:'100vw', height:'100vh', background:`linear-gradient(to bottom right,${bgcolor1}, ${bgcolor2})`}}>
  <button onClick={changeColor}>Click to change color</button>
  </div>

  )
}

export default App