import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer_img">
          <img src="./image/footer1.png" alt="uyyd" id="footer_img1" />
          <img src="./image/footer2.png" alt="uyydDDD" id="footer_img2" />
        </div>

        <div className="Footer_link">
          <div className="footer_link_logo">
            <img src="./image/footerlogo.png" alt="fhg" />
          </div>

          <div className="footer_links">
            <h1>QUICK LINKS</h1>
            <div className="link_h3">
            <h3>ABOUT US</h3>
            <h3>TREKKING</h3>
            <h3>GALLERY </h3>
            <h3>OUR TEAM</h3>
            </div>
            
          </div>

          <div className="footer_links">
            <h1>USEFUL LINKS</h1>
            <div className="link_h3">
            <h3>SUPPORT</h3>
            <h3>DISCLAMAIR</h3>
            <h3>ELEMENT</h3>
            <h3>PRIVACY POLICY</h3>
            </div>
            
          </div>

          
        </div>

        <div className="input_box">
            <h1>CONNECT WITH US--</h1>
              <div className="footer_btn">
                 <input type="email" placeholder="YOUR E-MAIL ADDRESS" id="input_box_1"></input>
                 <button>SEND</button>
              </div>
          </div>
      </div>
    </>
  );
};
export default Footer;
