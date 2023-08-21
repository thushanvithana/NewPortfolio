"use client";
import React, { useState, useEffect } from "react";

const YellowCover = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="bg-main">
      <section className="section-1fgh" id="home" style={{height:'10px', marginTop:'150px'}}>
        <div className="container">
          <div className="person">
            <div className="container10">
              <div className="container10-inner">
                <img className="circle" />
                <img
                  className="img img1"
                  src="https://i.postimg.cc/V6944BY1/1678552636496.webp"
                />
              </div>
            </div>
            <div className="divider">
              {" "}
              <div className="thu">
                {" "}
                I am a
                <div className="dropping-texts">
                  <div> Developer</div>
                  <div> Freelancer</div>
                  <div> Photographer</div>
                </div>
              </div>
              <a href="#contact" className="contact-button">
                <div>
                  <span className="bg"></span>
                  <span className="base"></span>
                  <span className="text">contact me </span>
                </div>
              </a>
            </div>
         
          </div>
        </div>
   
      </section>
      
    </div>
  );
};

export default YellowCover;
