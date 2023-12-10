import React, { useState } from "react";
import axios from "axios";
import {  } from "./style.css";

function Form({ setInfo,setState }) {
  const [city, setCity] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();
    const api = "a887f516fffa6041d9403f2d25eaf7fe";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
      setState(true)
    try {
      const response = await axios(baseURL);
      setInfo(response.data);
    } catch (error) {
      console.error("API call error:", error);
    }

  };

  return (
    <div>
      <h1>Hava Durumu</h1>
      <form onSubmit={handleChange}>
        <div>
          <input 
          className="inputText"
            type="text"
            placeholder="şehri giriniz"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn">
            Verileri Getir
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
