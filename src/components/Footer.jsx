import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaVoicemail,
} from "react-icons/fa";
const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* TOP DESCRIPTION */}
      <div className="footer-top">
        <p>
          At Maharshi Vivekananda Gyanasthali, we are committed to providing a
          transformative educational experience, fostering intellectual
          curiosity, critical thinking, and holistic growth.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="footer-container">
        {/* LINKS */}
        <div className="footer-col">
          <h3>Useful Links</h3>

          <p onClick={() => scrollTo("home")}>Home</p>
          <p onClick={() => scrollTo("values")}>About</p>
          <p onClick={() => scrollTo("academics")}>Academics</p>
          <p>Faculty</p>
          <p>Events</p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>
            <FaPhone /> +91 9936943257
          </p>
          <p>
            <FaPhone /> +91 9559700200
          </p>
          <p>
            <FaVoicemail /> withraghav@gmail.com
          </p>
          <p>
            <FaVoicemail /> adi700200@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt /> Gausganj Road, Near Balamau Railway Crossing,
            Balamau Hardoi UP (241126)
          </p>
        </div>

        {/* MAP */}
        <div className="footer-col map">
          <h3>Location</h3>
          <iframe
            src="https://www.google.com/maps?q=27.1295,80.2932778&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="footer-social">
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 Maharshi Vivekananda Gyanasthali. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
