import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Gallery.css";


function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80",
  ];

  return (
    <section className="container my-5" id="gallery">
      <h2 className="fw-bold text-center mb-4 pt-5 heading">Property Gallery</h2>

      <div className="row g-4">
        {images.map((img, i) => (
          <div
            className="col-md-6 gallery-card"
            key={i}
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay={i * 200} // ← staggered delay, har image 200ms extra
          >
            <img className="img-fluid rounded gallery-img" src={img} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
