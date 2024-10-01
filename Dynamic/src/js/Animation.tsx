// src/components/TypeMachine.js
import React, { useEffect, useRef } from "react";

const TypeMachine = ({ speed = 80 }) => {
	const testerRef = useRef(null); // Gebruik useRef om de DOM-elementen bij te houden
	const innerText = "Hi, this is a test."; // Dit is de tekst die we willen typen

	// Typmachine functie
	const type = (element) => {
		let i = 0; // Begin bij de eerste letter
		let text = ""; // Huidige tekst die wordt weergegeven

		element.innerText = ""; // Leeg het element voordat je begint

		const typing = () => {
			if (text === innerText) {
				return; // Stop als de tekst is getypt
			}
			text = innerText.slice(0, ++i); // Voer de volgende letter toe
			element.innerText = text; // Update de weergave
			setTimeout(typing, speed); // Herhaal met een vertraging
		};

		typing(); // Start het typen
	};

	// Gebruik useEffect om de typmachine te initialiseren wanneer de component wordt geladen
	useEffect(() => {
		const element = testerRef.current; // Haal het DOM-element op
		type(element); // Start de typmachine op het DOM-element

		// Event listener voor klikken op het document
		const handleClick = () => type(element); // Typ opnieuw bij klikken

		document.body.addEventListener("click", handleClick);

		// Cleanup: verwijder de event listener bij unmounting
		return () => {
			document.body.removeEventListener("click", handleClick);
		};
	}, []); // Lege afhankelijkheden array betekent dat het maar één keer wordt uitgevoerd bij het mounten

	return (
		<div className="tester" ref={testerRef}>
			{/* Deze inhoud wordt door de typmachine vervangen */}
		</div>
	);
};

export default TypeMachine;
