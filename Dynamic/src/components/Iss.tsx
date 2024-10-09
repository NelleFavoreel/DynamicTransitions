import { useInView, animated } from "@react-spring/web";
import iss from "../assets/issPng.webp";

function Iss() {
	const [refSlideIn, slideIn] = useInView(() => ({
		from: {
			transform: "translateX(100%) translateY(100%) rotate(-20deg)",
		},
		to: {
			transform: "translateX(-100%) translateY(0%) rotate(20deg)",
		},

		config: {
			tension: 10,
			friction: 10,
		},
	}));

	return (
		<div className="IssPng">
			<animated.img ref={refSlideIn} style={slideIn} src={iss} alt="" />
		</div>
	);
}

export default Iss;
