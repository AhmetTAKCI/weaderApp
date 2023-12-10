import React from "react";
import {  } from "./style.css";

function Info({ info,state }) {
  if (!info) {
    
    return <div>No information available</div>;
  }

  return (
   <div>
    { state ?
    <div className="info">
     
     <p id="sehir">{info.name}</p>
      <div className="genelDeger">
        <p id="sicaklik">sicaklik:{info.main && info.main.temp}</p>
      </div>
      <p id="havaDurumu">{info.weather && info.weather[0].description}</p>
      <div className="his">
        <p id="hissedilen">hissedilen:{info.main && info.main.feels_like}</p>
      </div>
    </div> : null
   }
   </div>
  );
}

export { Info };
