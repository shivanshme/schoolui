import { useRef, useState } from "react";

function Gallery() {
  const videos = ["/schoolvid.mp4", "/schoolvid2.mp4"];
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  const handleEnd = () => {
    setIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="gallery">
      <video
        key={index}
        ref={videoRef}
        src={videos[index]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnd}
        className="video-bg"
      />

      <div className="overlay-text">
        <h1>Maharshi Vivekananda Gyanasthali</h1>
        <p>Knowledge | Values | Excellence</p>
      </div>
    </section>
  );
}

export default Gallery;
