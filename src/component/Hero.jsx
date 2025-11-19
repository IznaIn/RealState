
import "./Hero.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/property (1).png"   
              alt="Luxury Estate Logo"
              style={{ width: "60px", height: "60px", objectFit: "contain" }}
            />
            <span className="ms-2 fw-bold fs-4 main">Luxury Estate</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <a className="nav-link fs-4 link navtext" href="#about">About</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link fs-4 link navtext" href="#amenities">Amenities</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link fs-4 link navtext" href="#gallery">Gallery</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link fs-4 link navtext" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <video
        className="hero-video"
        src="/background-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-content">
        <h1>Your Real Estate Partner</h1>
        <h5>Find your dream home with us</h5>
      </div>
    </div>
  );
}

export default HeroSection;
