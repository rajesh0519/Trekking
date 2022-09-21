import React from "react";
import "../style/destination.css";

const Destination = () => {
  return (
    <>
      <div className="details_container">
        <div className="destination_header">
          <h1>DESTINATION</h1>
          <h5>MOST POPULAR TREKKING</h5>
        </div>
        <div className="text_btn">
          <h2>
            HERE WE LIST OUR MOST POPULAR DESTINATIONS WE HAD AND FULL DETAILS
            ARE AS FOLLOWED
          </h2>
          <button className="btn3">VEIW ALL</button>
        </div>
        <div className="details_card_container">
          <div className="details_card">
            <img src="/image/card1.png" alt="jjd" />

            <div className="detail_text">
              <div className="detail_text_div">
                <h3>10 </h3>
                <h3>Person</h3>
              </div>

              <div className="detail_text_div">
                <h3>4 </h3>
                <h3>days</h3>
              </div>

              <div className="detail_text_div_3">
                <h3>500 RS </h3>
                <h3>Per Person</h3>
              </div>
            </div>
            <a href="hh" className="link_1">
              START EXPLORING
            </a>
          </div>

          <div className="details_card">
            <img src="/image/card1.png" alt="jjd" />

            <div className="detail_text">
              <div className="detail_text_div">
                <h3>10 </h3>
                <h3>Person</h3>
              </div>

              <div className="detail_text_div">
                <h3>4 </h3>
                <h3>days</h3>
              </div>

              <div className="detail_text_div_3">
                <h3>500 RS </h3>
                <h3>Per Person</h3>
              </div>
            </div>
            <a href="hh" className="link_1">
              START EXPLORING
            </a>
          </div>

          <div className="details_card">
            <img src="/image/card1.png" alt="jjd" />

            <div className="detail_text">
              <div className="detail_text_div">
                <h3>10 </h3>
                <h3>Person</h3>
              </div>

              <div className="detail_text_div">
                <h3>4 </h3>
                <h3>days</h3>
              </div>

              <div className="detail_text_div_3">
                <h3>500 RS </h3>
                <h3>Per Person</h3>
              </div>
            </div>
            <a href="hh" className="link_1">
              START EXPLORING
            </a>
          </div>
        </div>
        <h1 id="text_bottom_4">
          <span>“</span> THE BEST JOURNEY IN THE LIFE ARE THOSE THAT ANSWER
          QUESTION YOU NEVER THOUGHT TO ASK
        </h1>
      </div>

      <div className="video_box">
        <img src="/image/videoboxx.png" alt="gh" />
      </div>
    </>
  );
};

export default Destination;
