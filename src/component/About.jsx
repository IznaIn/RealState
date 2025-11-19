import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";



function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // ek baar scroll hone par hi animation
    });
  }, []);

  return (
    <section className="container mt-5 about-section " id="about" ref={ref}>
      <div className="row align-items-center">

        {/* LEFT TEXT */}
        <div className="col-md-6 about-text">
          <h2 className="fw-bold mb-4 fs-1">
            {inView && (
              <Typewriter
                words={["Who We Are"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={0}
                delaySpeed={500}
              />
            )}
          </h2>

          <p className="mt-3 fs-5 text-secondary">
            {inView && (
              <Typewriter
                words={[
                  `With years of experience, we ensure every project meets high-quality standards —
                   from planning to construction — giving you a living experience that truly feels like home.
                   Our dedicated team focuses on every detail to deliver comfort, luxury, and functionality.`
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={35}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            )}
          </p>

          <button className="learn-btn mt-4">
  Learn More
</button>
        </div>

        {/* RIGHT IMAGE with AOS fade-left */}
        <div
          className="col-md-6 mt-4 mt-md-0"
          data-aos="fade-left"       // ← AOS animation added here
        >
          <img
            src="https://images.pexels.com/photos/19889118/pexels-photo-19889118.jpeg"
            className="img-fluid rounded shadow-lg about-image"
            alt="Luxury Home"
          />
        </div>

      </div>
    </section>
  );
}

export default About;
