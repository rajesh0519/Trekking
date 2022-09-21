import React from "react";
import "../style/whytrekking.css";

const Whytrekking = () =>{
    return(
       <>
        <div className="why_trekking">
            <div className="text">
                <h1 id="text_1">
                   WHY TREKKING WITH US?
                </h1>
                <h3 id="text_2">
                    WE provide BEST HIKING AND TREKKING TO YOUR JOURNEY
                </h3>
            </div>
            <div className="video_box2">
                <img src="/image/videobox.png" alt="jjd"/>
            </div>
    {/* ***********************icons******************************* */}
         <div className="icons">   
            <div className="icons_bottom">
                <div className="icons_bottom_1">
                    <img src="/image/icon1.png" alt="yt"/>
                    <h1 id="icon_text">EXPLORATION</h1>
                </div>
            </div>

            <div className="icons_bottom" >
                <div className="icons_bottom_1" id="icon_bottomm">
                    <img src="/image/icon2.png" alt="lk"/>
                    <h1 id="icon_text">PROVIDE EQUIPMENTS</h1>
                </div>
            </div>

            <div className="icons_bottom">
                <div className="icons_bottom_1">
                    <img src="/image/icon3.png" alt="gh"/>
                    <h1 id="icon_text">ADVENTURES</h1>
                </div>
            </div>

            <div className="icons_bottom">
                <div className="icons_bottom_1">
                    <img src="/image/icon4.png" alt="oi"/>
                    <h1 id="icon_text">PROFESSIONAL GUIDE</h1>
                </div>
            </div>
            </div>
        </div>
       </>
    );
};

export default Whytrekking;