import React, { useState, useEffect } from "react";
import axios from "axios";

function Form() {
  const [info, setInfo] = useState([]);
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const api = "a887f516fffa6041d9403f2d25eaf7fe";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;

    axios(baseURL)
      .then((res) => setInfo(res.data))
      .catch((error) => console.error("API call error:", error));
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div>
      <h1>Hava Durumu</h1>
      <form onSubmit={handleChange}>
        <div>
          <input
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
