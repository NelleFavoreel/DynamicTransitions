import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Text1 from "./StartText";
import Raket from "./Raket";
import Animation from "../js/Animation";
import Image from "../assets/earthWhole.jpg";
import Text2 from "./Explenation";
import NewScreen from "./NewScreen";

function ParallaxComponent() {
	const [showNewScreen, setShowNewScreen] = useState(false);

	return (
		<div>
			{showNewScreen && (
				<div className="overlay">
					<NewScreen onClose={() => setShowNewScreen(false)} />
				</div>
			)}

			<Parallax className="parallax" pages={4} style={{ top: "0", left: "0" }}>
				<ParallaxLayer offset={0} speed={0}>
					<div className="header">
						<Animation />
					</div>
					<img className="image" src={Image} alt="Earth" />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0}>
					<Text1 />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={1}>
					<Raket />
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={1}>
					<Text2 />
				</ParallaxLayer>
				<ParallaxLayer
					offset={3}
					speed={0}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}
				>
					<button onClick={() => setShowNewScreen(true)} className="button">
						Toon Nieuwe Scherm
					</button>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default ParallaxComponent;
