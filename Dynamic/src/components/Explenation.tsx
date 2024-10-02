import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer"; // Importeren van intersection observer
import { gsap } from "gsap"; // Vergeet niet gsap te importeren
import aardeLinks from "../assets/aarde.jpg";

function Text2() {
	const imgRef = useRef(null); // Ref voor de afbeelding
	const textRef1 = useRef(null); // Ref voor de eerste tekst
	const textRef2 = useRef(null); // Ref voor de tweede tekst
	const { ref, inView } = useInView({
		threshold: 0.1, // Het percentage van de afbeelding dat zichtbaar moet zijn
		triggerOnce: true, // Zorgt ervoor dat de animatie maar één keer wordt uitgevoerd
	});

	useEffect(() => {
		if (inView) {
			// Fade-in animatie voor de afbeelding
			gsap.fromTo(
				imgRef.current,
				{ opacity: 0 }, // Begin met volledig transparant
				{ opacity: 0.6, duration: 5, delay: 1 } // Fade naar volledig zichtbaar zonder flits
			);

			// Animatie voor de tekst
			gsap.fromTo(
				textRef1.current,
				{ x: "100%", opacity: 0 }, // Start buiten beeld aan de rechterkant
				{ x: "0%", opacity: 1, duration: 2, ease: "power2.out", delay: 0 } // Einde op normale positie
			);

			gsap.fromTo(
				textRef2.current,
				{ x: "100%", opacity: 0 }, // Start buiten beeld aan de rechterkant
				{ x: "0%", opacity: 1, duration: 2, ease: "power2.out", delay: 0.5 } // Einde op normale positie met een kleine vertraging
			);
		}
	}, [inView]); // Voer deze effect uit wanneer 'inView' verandert

	return (
		<div className="TextFlex2">
			{/* De afbeelding met de fade-in effect */}
			<img
				ref={(el) => {
					imgRef.current = el;
					ref(el);
				}}
				src={aardeLinks}
				alt="foto"
				style={{ opacity: 0 }}
			/>
			<div className="rightDiv">
				<h2 className="right2" ref={textRef1}>
					Andere raket
				</h2>
				<h2 className="right2" ref={textRef2}>
					Volgens ruimtevaartorganisatie NASA zou het zelfs kunnen dat de Starliner helemaal niet meer veilig genoeg is om te gebruiken. De astronauten zouden dan met een andere raket moeten terugreizen, maar dat betekent wel dat ze nog zeker een
					half jaar in het ruimtestation moeten wachten voor die daar is om ze op te halen.
				</h2>
				<h2 className="right2" ref={textRef1}>
					Afwachten
				</h2>
				<h2 className="right2" ref={textRef2}>
					Voorlopig moeten de astronauten dus maar afwachten wanneer ze terug kunnen naar de aarde. In september wordt definitief besloten of de astronauten toch met de Starliner terug kunnen of nog een half jaartje in de ruimte moeten wonen.
				</h2>
			</div>
		</div>
	);
}

export default Text2;
