import "./App.css";

//import { gsap } from "gsap";

import Animation from "./js/Animation.tsx";
import Image from "./assets/earthWhole.jpg";
import ParallaxText from "./components/ParallaxText.tsx";
import Raket from "./components/Raket.tsx";

function App() {
	return (
		<>
			<div></div>
			<div className="header">
				<Animation></Animation>
			</div>
			<img className="image" src={Image} alt="Earth" />
			<div></div>
			<ParallaxText></ParallaxText>
			<Raket></Raket>
		</>
	);
}

export default App;
