import { FaSchool, FaBookOpen, FaFlask, FaLaptopCode } from "react-icons/fa";

function Academics() {
    const data = [
        {
            icon: <FaSchool />,
            title: "Primary Education",
            desc: "Strong foundational learning with focus on basics and creativity.",
        },
        {
            icon: <FaBookOpen />,
            title: "Secondary Education",
            desc: "Balanced academic curriculum with focus on conceptual clarity.",
        },
        {
            icon: <FaFlask />,
            title: "Science Programs",
            desc: "Hands-on experiments and real-world scientific learning.",
        },
        {
            icon: <FaLaptopCode />,
            title: "Technology",
            desc: "Digital learning, coding, and modern tech exposure.",
        },
    ];

    return (
        <section id="academics" className="academics-section">
            <h2 className="section-title">Academics</h2>

            <div className="academics-container">
                {data.map((item, index) => (
                    <div className="academic-card" key={index}>
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Academics;