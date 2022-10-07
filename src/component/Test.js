import React, { useState } from "react";
import "../style/test.css";

function FavoriteColor() {
    const [color, setColor] = useState("red");

    return (
        <>
    
            <h1>My favorite color is <span id="color">{color}</span>!</h1> 
            <button type="button" onClick={() => setColor("blue")} id="btn1">Blue</button>

                <button type="button" onClick={() => setColor("yellow")}id="btn2">yellow</button>

                <button type="button" onClick={() => setColor("green")} id="btn3">green</button>
        
        </>
        );
  }

   

export default FavoriteColor;