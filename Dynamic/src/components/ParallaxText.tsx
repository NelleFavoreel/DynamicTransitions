import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Text1 from "./StartText";
import Raket from "./Raket";
function ParallaxComponent() {
	return (
		<div>
			<Parallax className="parallax" pages={3} style={{ top: "0", left: "0" }}>
				<ParallaxLayer offset={1} sticky={1} speed={0}>
					<Text1></Text1>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0}>
					<Raket></Raket>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
export default ParallaxComponent;
