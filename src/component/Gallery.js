import React from "react";
import "../style/gallery.css";

 const Gallery = ()=>{
    return(
      <>
      <div className="gallery_box">
            <div className="gallery_text">
                 <h1 id="gallery_text_1">
                      JOURNEY
                 </h1>
                
                 <h3 id="gallery_text_2"> 
                     Gallery F THE TOURS
                 </h3>
             </div>

             <div className="gallery_img">
                 <img src="/image/gallery_1.png"  alt="bvc"/>
                 <img src="/image/gallery_2.png"  alt="bvc"/>
                 {/* <p1>MOUNT BATUR,BALI 14 MEMBER</p1> */}
                 <img src="/image/gallery_3.png"  alt="bvc"/>
                 <img src="/image/gallery_4.png"  alt="bvc"/>
             </div>
      </div>
      </>
    );
};

export default Gallery;