import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import images from "./Image";

import image12 from "./assets/gallery/image12.jpg";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <button className="nav-button prev" onClick={prevImage}></button>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="slider-image"
      />
      <button className="nav-button next" onClick={nextImage}></button>
    </div>
  );
};

export default ImageSlider;
