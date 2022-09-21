import React from "react";
import "../style/destination.css";

const Destination = () =>{
    return(
       <>
       <div className="details_container">
              <div className="test"> 
                 <h1>
                       DESTINATION
                </h1>
                <h5>MOST POPULAR TREKKING</h5>
              </div> 
              <div className="text_btn">
                   <h2>HERE WE LIST OUR MOST POPULAR DESTINATIONS WE HAD AND FULL DETAILS ARE AS FOLLOWED</h2>
                   <button className="btn3">VEIW ALL</button>
                </div>

            <div className="details_card_container">
              <img src="/image/card1.png" alt="jjd" />
            
                <h3 id="text_bottom_1">10 Person</h3>
                <h3 id="text_bottom_2">4 Days</h3>
                <h3 id="text_bottom_3">500 RS Per Person </h3>
                <a href="hh" className="link_1">START EXPLORING</a>
            </div>
            

           <div className="details_card_container">
              <img src="/image/card2.png" alt="jjd" />
              <h3 id="text_bottom_1">10 Person</h3>
              <h3 id="text_bottom_2">4 Days</h3>
              <h3 id="text_bottom_3">500 RS Per Person </h3>
              <a href="hh" className="link_1">START EXPLORING</a>
           </div>
            
           <div className="details_card_container">
              <img src="/image/card3.png" alt="jjd" />
              <h3 id="text_bottom_1">10 Person</h3>
              <h3 id="text_bottom_2">4 Days</h3>
              <h3 id="text_bottom_3">500 RS Per Person </h3>
              <a href="hh" className="link_1">START EXPLORING</a>
           </div>


           <h1 id="text_bottom_4"><span>“</span> THE BEST JOURNEY IN THE LIFE ARE THOSE THAT ANSWER QUESTION YOU NEVER THOUGHT TO ASK</h1>
       </div>

       <div className="video_box">
          <video loop autoPlay>
          <source
          src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
          type="video/mp4"
        />
        
      </video>
      <h1 >Space for video box </h1>
    </div>

     
       </>
    );
};

export default Destination;