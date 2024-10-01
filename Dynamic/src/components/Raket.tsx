import raket from "../assets/raket.png";
import { useInView, animated } from "@react-spring/web";

function Raket() {
	const [refSlideIn1, slideIn1] = useInView(
		() => ({
			from: {
				transform: "translateX(-100%)", // Start buiten het scherm aan de linkerkant
			},
			to: {
				transform: "translateX(600%)", // Eindigt buiten het scherm aan de rechterkant
			},
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
