import React, { useEffect } from "react";
import "./Gallery.css";
import image1 from "./assets/gallery/image1.jpg";
import image2 from "./assets/gallery/image2.jpg";
import image3 from "./assets/gallery/image3.jpg";
import image4 from "./assets/gallery/image4.jpg";
import image5 from "./assets/gallery/image5.jpg";
import image6 from "./assets/gallery/image6.jpg";
import image7 from "./assets/gallery/image7.jpg";
import image8 from "./assets/gallery/image8.jpg";
import image9 from "./assets/gallery/image9.jpg";
import image10 from "./assets/gallery/image10.jpg";
import image11 from "./assets/gallery/image11.jpg";
import image12 from "./assets/gallery/image12.jpg";
import image13 from "./assets/gallery/image13.jpg";
import image14 from "./assets/gallery/image14.jpg";
import image15 from "./assets/gallery/image15.jpg";
import image16 from "./assets/gallery/image16.jpg";
import image17 from "./assets/gallery/image17.jpg";
import image18 from "./assets/gallery/image18.jpg";
import image19 from "./assets/gallery/image19.jpg";
import image20 from "./assets/gallery/image20.jpg";
import image21 from "./assets/gallery/image21.jpg";
import image22 from "./assets/gallery/image22.jpg";
import image23 from "./assets/gallery/image23.jpg";
import image24 from "./assets/gallery/image1.jpg";
import image25 from "./assets/gallery/image1.jpg";
import image26 from "./assets/gallery/image1.jpg";
import image27 from "./assets/gallery/image1.jpg";
import image28 from "./assets/gallery/image1.jpg";
import image30 from "./assets/gallery/image1.jpg";
import ImageSlider from "./ImageSlider";
import images from "./Image";
import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  });
  return (
    <section id="demo">
      <h1>Gallery</h1>
      <div className="gal">
        {/* <section>
          <ImageSlider images={images} />
        </section> */}
        <section>
          <div class="gallery">
            <figure class="gallery-item" data-aos="fade-up">
              <img src={image4} alt="Image 1 description" />
              <figcaption>Image 1 Description</figcaption>
            </figure>
            <figure class="gallery-item" data-aos="fade-up">
              <img src={image5} alt="Image 2 description" />
              <figcaption>Image 2 Description</figcaption>
            </figure>{" "}
            <figure class="gallery-item" data-aos="fade-up">
              <img src={image6} alt="Image 2 description" />
              <figcaption>Image 2 Description</figcaption>
            </figure>{" "}
            <figure class="gallery-item" data-aos="fade-up">
              <img src={image7} alt="Image 2 description" />
              <figcaption>Image 2 Description</figcaption>
            </figure>{" "}
            <figure class="gallery-item" data-aos="fade-up">
              <img src={image8} alt="Image 2 description" />
              <figcaption>Image 2 Description</figcaption>
            </figure>{" "}
            <figure class="gallery-item" data-aos="fade-up">
              <img src={image9} alt="Image 2 description" />
              <figcaption>Image 2 Description</figcaption>
            </figure>{" "}
            <figure class="gallery-item" data-aos="fade-up">
              <img src={image10} alt="Image 2 description" />
              <figcaption>Image 2 Description</figcaption>
            </figure>{" "}
            <figure class="gallery-item" data-aos="fade-up">
              <img src={image11} alt="Image 2 description" />
              <figcaption>Image 2 Description</figcaption>
            </figure>{" "}
            <figure class="gallery-item" data-aos="fade-up">
              <img src={image12} alt="Image 2 description" />
              <figcaption>Image 2 Description</figcaption>
            </figure>
          </div>
        </section>

        <section className="slider-horizontal">
          <hr></hr>
          <div className="row__posters" data-aos="fade-in">
            <marquee>
              <img className="row__poster" src={image13} />
              <img className="row__poster" src={image14} />
              <img className="row__poster" src={image27} />
              <img className="row__poster" src={image15} />
              <img className="row__poster" src={image16} />
              <img className="row__poster" src={image17} />
              <img className="row__poster" src={image18} />
              <img className="row__poster" src={image25} />
              <img className="row__poster" src={image19} />
              <img className="row__poster" src={image20} />
              <img className="row__poster" src={image22} />
              <img className="row__poster" src={image23} />
              <img className="row__poster" src={image24} />
              <img className="row__poster" src={image20} />
            </marquee>
          </div>
          <hr></hr>
        </section>
      </div>
    </section>
  );
}

export default Gallery;
