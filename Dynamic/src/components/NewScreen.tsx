import React from "react";

function NewScreen({ onClose }) {
	return (
		<div className="new-screen">
			<h2>Nieuwe Scherm</h2>
			<p>Hier is de inhoud van het nieuwe scherm.</p>
			<button onClick={onClose}>Sluit</button>
		</div>
	);
}

export default NewScreen;
