import React from 'react';

import './App.css';
import {FnComponentExample} from "./FnComponentExample";
import {ClassComponentExample} from "./ClassComponentExample";
import {FormsyExample} from "./FormsyExample";
import {ReduceHookComponentExample} from "./ReduceHookComponentExample";

const App: React.FC = () => {

  return (
    <div className="App">
      <h1>Typescript example app</h1>

      <FnComponentExample person={{first: "J", last: "T"}} tExtample={"hello"} handleChange={
          e => { console.log(e.target) }
      }/>

      <ClassComponentExample message={"Message prop text"}/>

      <FormsyExample FormsyName={"Formsy Example"}/>

      <ReduceHookComponentExample/>

    </div>
  );
};

export default App;
