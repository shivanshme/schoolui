import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer" id="footer">

            {/* TOP DESCRIPTION */}
            <div className="footer-top">
                <p>
                    At Maharshi Vivekananda Gyanasthali, we are committed to providing a
                    transformative educational experience, fostering intellectual curiosity,
                    critical thinking, and holistic growth.
                </p>
            </div>

            {/* MAIN GRID */}
            <div className="footer-container">

                {/* LINKS */}
                <div className="footer-col">
                    <h3>Useful Links</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Academics</p>
                    <p>Faculty</p>
                    <p>Events</p>
                    <p>Contact Us</p>
                </div>

                {/* CONTACT */}
                <div className="footer-col">
                    <h3>Contact</h3>
                    <p><FaPhone /> +91 0000000000</p>
                    <p><FaMapMarkerAlt /> Your School Address</p>
                </div>

                {/* MAP */}
                <div className="footer-col map">
                    <h3>Location</h3>
                    <iframe
                        src="https://www.google.com/maps?q=Delhi&output=embed"
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