import React from "react";
import "../style/testimonals.css";

const Testimonals = () => {
    return (
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
                    <img src="/image/testimonal.png" alt="tt" />

                    <div className="bottom_text">
                        <p1>trekking has always helped me in getting mental peace and a<br /> peaceful time to spend with inner me.
                            and i would specially thanx <br />to this company for helping me to connect with my inner spirit.</p1>
                        <img src="./image/stars.png" alt="fg" id="stars" />
                        <h2 id="bottom_text_1">
                            NELSON MANDELA
                        </h2>
                        <h3 id="bottom_text_2">
                            PRESIDENT OF AMERICA
                        </h3>
                    </div>

                </div>


            </div>

            <div className="experience">
                <div className="experience_text">
                    <img src="/image/+.png" alt="jhf"/>
                 
                    <h1>
                        15+
                    </h1>
                    <div className="experience_text_1">
                    <h1>
                        Years Of Experience
                    </h1>
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default Testimonals;
