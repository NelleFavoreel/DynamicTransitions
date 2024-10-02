import { useInView, animated } from "@react-spring/web";
function Text1() {
	const [refSlideIn, slideIn] = useInView(
		() => ({
			from: {
				transform: "translateX(-60%)",
			},
			to: {
				transform: "translateX(0%)",
			},
			config: {
				tension: 10,
				friction: 10,
			},
		}),
		{}
	);
	const [refSlideIn1, slideIn1] = useInView(
		() => ({
			from: {
				transform: "translateX(60%)",
			},
			to: {
				transform: "translateX(0%)",
			},
			config: {
				tension: 10,
				friction: 10,
			},
		}),
		{}
	);

	return (
		<>
			<div className="textFlex">
				<div>
					<animated.h1 className="left" ref={refSlideIn} style={slideIn}>
						Hoe?
					</animated.h1>
					<animated.h2 className="left" ref={refSlideIn} style={slideIn}>
						De astronauten Butch Wilmore en Suni Williams vertrokken in juni met de eerste vlucht van de raket Starliner naar het ISS. Daarvoor waren er al problemen met het voertuig. Twee lanceringen werden uitgesteld vanwege problemen.
					</animated.h2>
				</div>
				<div>
					<animated.h2 className="right" ref={refSlideIn1} style={slideIn1}>
						Nu ze in de ruimte zijn, blijken er nog steeds problemen met de raket van fabrikant Boeing. Er zouden lekkages zijn en door hitteproblemen komt er te weinig brandstof in de raket. Voor de veiligheid stappen de astronauten dus nog even
						niet in de Starliner voor hun terugritje.
					</animated.h2>
				</div>
			</div>
		</>
	);
}

export default Text1;
