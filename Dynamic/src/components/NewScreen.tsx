import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import stars from "../assets/stars.jpg";

function NewScreen({ onClose }) {
	const imgRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			imgRef.current,
			{ opacity: 0 }, // Begin met volledig transparant
			{ opacity: 1, duration: 1 } // Fade naar volledig zichtbaar
		);
	}, []);

	return (
		<div className="new-screen" style={{ position: "relative", overflow: "hidden" }}>
			<img ref={imgRef} src={stars} alt="Sterren" style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: -1 }} />
			<div style={{ position: "relative", zIndex: 1, padding: "20px", textAlign: "center" }}>
				<h2>2 astonauten</h2>
				<p>Hier is de inhoud van het nieuwe scherm.</p>
				<button onClick={onClose}>Sluit</button>
			</div>
		</div>
	);
}

export default NewScreen;
