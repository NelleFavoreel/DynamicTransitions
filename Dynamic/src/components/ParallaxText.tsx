import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Text1 from "./StartText";
import Raket from "./Raket";
import Animation from "../js/Animation";
import Text2 from "./Explenation";
import NewScreen from "./NewScreen";
import Text3 from "./Sound";
import Image from "../assets/Background copy.webp";
import End from "./End";
import Earth from "./Earth";
import Iss from "./Iss";
import ParticlesBackground from "./ParticlesBackground";

function ParallaxComponent() {
	const [showNewScreen, setShowNewScreen] = useState(false);
	const [startAnimation, setStartAnimation] = useState(false);

	const handleClick = () => {
		// Start de animatie
		setStartAnimation(true);

		// Wacht even voordat je het nieuwe scherm toont
		setTimeout(() => {
			setShowNewScreen(true);
		}, 1000); // Dit is afhankelijk van de duur van de animatie
	};

	const handleClose = () => {
		// Stop de animatie en sluit het nieuwe scherm
		setShowNewScreen(false);
		setStartAnimation(false);
	};

	return (
		<div>
			<ParticlesBackground />
			{showNewScreen && (
				<div className="overlay">
					<NewScreen onClose={handleClose} />
				</div>
			)}

			<div className={`circle-overlay ${startAnimation ? "expand" : ""}`}></div>

			<Parallax className="parallax" pages={6} style={{ top: "0", left: "0" }}>
				<ParallaxLayer offset={0} speed={0}>
					<div className="home">
						<img src={Image} alt="" />
						<div className="header">
							<Animation />
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0}>
					<Text1 />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={1.5}>
					<Raket />
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={1}>
					<Text2 />
				</ParallaxLayer>
				<ParallaxLayer offset={3} speed={1}>
					<Text3 />
				</ParallaxLayer>
				<ParallaxLayer
					offset={4}
					speed={0}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}
				>
					<button onClick={handleClick} className="button">
						Wat doet dat met een mens?
						<span className="material-icons">arrow_forward</span>
					</button>
				</ParallaxLayer>
				<ParallaxLayer offset={5} speed={0}>
					<End></End>
				</ParallaxLayer>
				<ParallaxLayer offset={5} speed={1}>
					<Earth></Earth>
				</ParallaxLayer>
				<ParallaxLayer offset={5} speed={0}>
					<Iss />
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default ParallaxComponent;
