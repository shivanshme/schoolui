import { useEffect, useState } from "react";
import {
    FaHome,
    FaInfoCircle,
    FaBook,
    FaLayerGroup,
    FaImages,
    FaPhone,
} from "react-icons/fa";

function Header() {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setActive(id);
    };
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ["home", "academics", "students", "footer"];
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop - 100;
                    const bottom = top + el.offsetHeight;

                    if (window.scrollY >= top && window.scrollY < bottom) {
                        setActive(id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "shrink" : ""}`}>
            <div id="home" className="nav-left">
                <img src="/logo.png" alt="logo" className="logo" />

                <h1 className="school-name">
                    Maharshi Vivekananda Gyanasthali
                </h1>

                <nav>
                    <a
                        className={active === "home" ? "active" : ""}
                        onClick={() => scrollTo("home")}
                    >
                        <FaHome /> Home
                    </a>

                    <a
                        className={active === "footer" ? "active" : ""}
                        onClick={() => scrollTo("footer")}
                    >
                        <FaInfoCircle /> About
                    </a>

                    <a
                        className={active === "academics" ? "active" : ""}
                        onClick={() => scrollTo("academics")}
                    >
                        <FaBook /> Academics
                    </a>

                    <a
                        className={active === "core" ? "active" : ""}
                        onClick={() => scrollTo("core")}
                    >
                        <FaLayerGroup /> Core
                    </a>

                    <a
                        className={active === "students" ? "active" : ""}
                        onClick={() => scrollTo("students")}
                    >
                        <FaImages /> Gallery
                    </a>

                    <a onClick={() => scrollTo("footer")}>
                        <FaPhone /> Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;