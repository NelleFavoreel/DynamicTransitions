import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "animate.css";

function NewScreen({ onClose }) {
	const imgRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
	}, []);

	return (
		<div className="new-screen" style={{ position: "relative", overflow: "hidden" }}>
			<div style={{ position: "relative", zIndex: 1, padding: "20px", textAlign: "center" }}>
				<h2 className="animate__animated animate__rotateIn">2 grote problemen</h2>
				<div className="newScreenDiv">
					<div>
						<h2>Tijdsbesef</h2>
						<h3>
							Een deel van de reden waarom wachten moeilijk is, is dat het ons tijdsbesef verstoort. Denk aan de laatste keer dat je wachtte op een trein met vertraging, testresultaten of een sms van een potentiële nieuwe partner. Vloog de tijd
							voorbij of sleepte die zich voort? Voor de meeste mensen kruipt wachttijd in een ijzig tempo voorbij. Daardoor voelen vertragingen en periodes van wachten vaak veel langer aan dan ze in werkelijkheid zijn. Wachten vertraagt onze
							perceptie van tijd, omdat het de hoeveelheid tijd verandert die we aan tijd besteden. In het normale dagelijkse leven negeren we tijd vaak, want onze hersenen hebben een beperkte capaciteit. Als tijd niet belangrijk is, denken we er
							gewoon niet aan en dit helpt om de tijd snel te laten verstrijken. Wanneer we wachten, vergroot ons verlangen om te weten wanneer het wachten voorbij is hoeveel we aan tijd denken. Dit ‘klokkijken’ kan ervoor zorgen dat de minuten en
							uren aanvoelen alsof ze met een slakkengang voorbijgaan. Stress, ongemak en pijn versterken dit effect, waardoor wachten in moeilijke situaties nog langer kan lijken.
						</h3>
					</div>
					<div>
						<h2>Heel koud</h2>
						<h3>
							Zes maanden vastzitten in het ISS klinkt misschien als de ergste nachtmerrie van veel mensen, maar het is niet ongewoon voor wetenschappers om lange perioden geïsoleerd en opgesloten door te brengen in extreme omgevingen. Elk jaar
							sturen organisaties zoals het Instituto Antártico Argentino (dat het Belgrano II Antarctisch station gebruikt), het Franse Poolinstituut en het Italiaanse Antarctische Programma, in samenwerking met het Europees Ruimteagentschap (die
							allemaal het Concordia station op Antarctica gebruiken), bemanningen van mensen voor maximaal zestien maanden naar het bevroren continent om er onderzoek te doen. Tijdens de poolwinter van maart tot oktober brengen de teams zes maanden
							door in bijna duisternis - en van mei tot augustus in volledige duisternis - en worden ze geconfronteerd met buitentemperaturen tot -60 °C, windsnelheden van 160 km/u en stormen die bijna alle buitenactiviteiten onmogelijk maken.
							Beperkte internetdekking kan ook constante communicatie met de buitenwereld verhinderen.
						</h3>
					</div>
				</div>
				<button className="button" onClick={onClose}>
					Sluit
				</button>
			</div>
		</div>
	);
}

export default NewScreen;
