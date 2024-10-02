import raket from "../assets/raket.png";
import { useInView, animated } from "@react-spring/web";

function Raket() {
	const [refSlideIn1, slideIn1] = useInView(
		() => ({
			from: {
				transform: "translate(-100%, 100%)", // Start linksonder (X naar links, Y naar beneden)
			},
			to: {
				transform: "translate(1000%, -100%)", // Eindigt rechtsboven (X naar rechts, Y naar boven)
			},
			config: {
				tension: 10, // Lagere snelheid
				friction: 50, // Hogere wrijving
				duration: 4000, // Totale duur van de animatie
			},
			reset: false, // Reset de animatie zodat deze opnieuw start
			loop: false, // Zorgt ervoor dat de animatie continu herhaalt
		}),
		{}
	);

	return (
		<div className="Raket">
			<animated.img className="img" ref={refSlideIn1} style={slideIn1} src={raket} alt="Raket" />
		</div>
	);
}

export default Raket;
