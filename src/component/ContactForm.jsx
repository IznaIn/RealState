import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

function ContactForm() {
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xgnbe3w",
        "template_8ikhbvo",
        e.target,
        "Q0GUAqC1_jPhI4ycZ"
      )
      .then(
        () => {
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          alert(error);
        }
      );
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="container my-5" id="contact">
      <h2 className="text-center fw-bold mb-4 pt-5 heading">Contact Us</h2>

      <div
        className="contact-card mx-auto"
        style={{ maxWidth: "500px" }}
        data-aos="zoom-in"
      >
        <form onSubmit={sendEmail}>
          <div className="mb-3">
            <label className="form-label text-dark">Name *</label>
            <input name="name" required className="form-control contact-input" />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="form-control contact-input"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              className="form-control contact-input"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Message *</label>
            <textarea
              name="message"
              required
              rows="4"
              className="form-control contact-input"
            ></textarea>
          </div>

          <button className="contact-btn w-100">Send Message</button>
        </form>

        {success && (
          <p className="text-success text-center mt-3">
            ✔ Message Sent Successfully!
          </p>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
