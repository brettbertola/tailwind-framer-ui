//import logo from './logo.svg';
import './App.css';
import Button from "./Button/Button"
import React from "react";
import MySwitch from './Switch/Switch';

function App() {
  return (
    <div>
      <Button label="HELLO" className="p-10"></Button>
    <MySwitch label="SO Sweet!!"></MySwitch>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  </div>
  );
}

export default App;
