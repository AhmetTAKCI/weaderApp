
import Form from './components/Form'
import './App.css';
import {Info}  from './components/Info'
import img from "./assets/img.jpg";
import { useState } from "react";


function App() {

  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false)

  return (
    <>
     <Form setInfo={setInfo} setState={setState} />
     <Info  info={info} state={state}/>
      
    </>
  )
}

export default App
