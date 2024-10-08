import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import aardeLinks from "../assets/aarde.jpg";

function Text2() {
	//verschillende ref --> niet meerdere elementen verbinden aan dezelfde ref's
	const imgRef = useRef(null);
	const textRef1 = useRef(null);
	const textRef2 = useRef(null);
	const textRef3 = useRef(null);
	const textRef4 = useRef(null);
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			gsap.fromTo(imgRef.current, { opacity: 0 }, { opacity: 0.6, duration: 5, delay: 1 });

			gsap.fromTo(textRef1.current, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 2, ease: "power2.out", delay: 0 });

			gsap.fromTo(textRef2.current, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 2, ease: "power2.out", delay: 0.5 });

			gsap.fromTo(textRef3.current, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 2, ease: "power2.out", delay: 1 });

			gsap.fromTo(textRef4.current, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 2, ease: "power2.out", delay: 1.5 });
		}
	}, [inView]);

	return (
		<div className="TextFlex2">
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
				<h2 className="right2" ref={textRef3}>
					Afwachten
				</h2>
				<h2 className="right2" ref={textRef4}>
					Voorlopig moeten de astronauten dus maar afwachten wanneer ze terug kunnen naar de aarde. In september wordt definitief besloten of de astronauten toch met de Starliner terug kunnen of nog een half jaartje in de ruimte moeten wonen.
				</h2>
			</div>
		</div>
	);
}

export default Text2;
