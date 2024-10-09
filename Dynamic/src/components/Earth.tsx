import earth from "../assets/earthPng.png";
import { useInView, animated } from "@react-spring/web";

function Earth() {
	const [refSlideIn, slideIn] = useInView(
		() => ({
			from: {
				transform: "translateX(90%) translateY(100%) ",
			},
			to: {
				transform: "translateX(0%) translateY(10%) ",
			},
			config: {
				tension: 10,
				friction: 10,
			},
		})
		// { once: true }
	);

	return (
		<div className="earthPng">
			<animated.img ref={refSlideIn} style={slideIn} src={earth} alt="" />
		</div>
	);
}

export default Earth;
