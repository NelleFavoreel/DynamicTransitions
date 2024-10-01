import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

//import { gsap } from "gsap";

import Animation from "./js/Animation.tsx";
import Image from "./assets/earthWhole.jpg";
import Text1 from "./components/StartText.tsx";

function App() {
	return (
		<>
			<div className="header">
				<Animation></Animation>
			</div>
			<img className="image" src={Image} alt="Earth" />

			<Text1></Text1>
		</>
	);
}

export default App;
