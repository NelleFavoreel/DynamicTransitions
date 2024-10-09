import { useState, useEffect } from "react";
import iss from "../assets/issPng.webp";

function Iss() {
	useEffect(() => {}, []);

	return (
		<div className="IssPng">
			<img src={iss} alt="" />
		</div>
	);
}

export default Iss;
