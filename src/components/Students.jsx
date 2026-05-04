import { useEffect, useState } from "react";

function Students() {
  const images = [
    "/student.jpeg",
    "/student2.jpeg",
    "/student4.jpeg",
    "/student3.jpeg",
  ];

  const [index, setIndex] = useState(0);

  // ⏱️ Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="students" className="students">
      <div className="slider-container">
        <img
          src={images[index]}
          className="slider-img"
          alt={`student-${index}`}
        />

        {/* Overlay text */}
        <div className="overlay-text">
          <h1>Our Students</h1>
          <p>Learning. Growing. Leading.</p>
        </div>
      </div>

      {/* 🔵 Dots Navigation */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Students;
