// Home.js
import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="home">
      <div className="wellcome">
        <h1 data-aos="fade-down">እንኳን ወደ ሀዋሳ ዩኒቨርስቲ</h1>
        <h1 data-aos="fade-up">ግቢ ጉባዔ በደህና መጣችሁ</h1>
        <a href="#demo">
          <button className="readmore">Read More</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
