import { useState, useEffect } from "react";
import raketImage from "../assets/raket.png";

function Raket() {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY;
			setScrollPosition(position);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return <img className="imageRaket" src={raketImage} alt="Raket" />;
}

export default Raket;
