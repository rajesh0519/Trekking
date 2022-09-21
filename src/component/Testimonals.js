import React from "react";
import "../style/testimonals.css";

const Testimonals  = () => {
    return(
       <>
        <div className="testimonal">
            <div className="testimonal_text">
                <h1 id="testimonal_text_1">
                    TESTIMONALS
                </h1>
                <h3 id="testimonal_text_2">
                    WHAT THEY SAY ABOUT US
                </h3>
            </div>
            <div className="testimonal_image">
                <img src="/image/testimonal.png" alt="tt"/>
                <p1>trekking has always helped me in getting mental peace and a<br/> peaceful time to spend with inner me.
                     and i would specially thanx <br/>to this company for helping me to connect with my inner spirit.</p1>
            </div>
        </div>
       </>
    );
};

export default Testimonals;
