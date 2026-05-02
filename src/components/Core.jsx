import { useEffect, useState } from "react";

function Core() {
    const lines = [
        "We offer education from playgroup to 10th, ensuring continuous and structured academic growth.",
        "Hindi and English medium options provide inclusive learning suited to diverse student backgrounds.",
        "Interactive teaching methods promote curiosity, creativity, and deeper conceptual understanding beyond textbooks.",
        "Our students consistently achieve strong academic results, reflecting dedication and discipline.",
        "Over 500 students nurtured with care, shaping confident individuals.",
        "Spacious playground with trees creates a balance of academics and well-being.",
        "Peaceful, student-friendly environment ensures focus and love for learning.",
        "Led by experienced mentors, teachers, and educationists committed to excellence."
    ];

    const [text, setText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let speed = isDeleting ? 30 : 50;

        const currentLine = lines[lineIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // typing
                setText(currentLine.substring(0, text.length + 1));

                if (text === currentLine) {
                    setTimeout(() => setIsDeleting(true), 1500); // pause
                }
            } else {
                // deleting
                setText(currentLine.substring(0, text.length - 1));

                if (text === "") {
                    setIsDeleting(false);
                    setLineIndex((prev) => (prev + 1) % lines.length);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, lineIndex]);

    return (
        <section className="core" id="core">
            <div className="core-overlay">
                <h2>Key Highlights</h2>
                <p className="typing">{text}<span className="cursor">|</span></p>
            </div>
        </section>
    );
}

export default Core;