import { animated } from "@react-spring/web";
import foto from "../assets/Foto.avif";

function Text1() {
	return (
		<>
			<div className="textFlex1">
				<div>
					<div className="animatieText">
						<h1 className="animatedTitle" data-text="Vreemde geluiden">
							Vreemde geluiden
						</h1>
					</div>
					<div className="TextPicture">
						<div>
							<animated.h2 className="Text3">
								Astronauten in het internationaal ruimtestation (ISS) hebben alarm geslagen nadat ze een vreemd, pulserend geluid hoorden komen uit de gestrande Boeing Starliner die aan het ruimtestation gekoppeld is. Ze stuurden een opname naar het
								vluchtleidingscentrum.
							</animated.h2>
							<h2>
								De Starliner hangt intussen nog altijd aan het ISS en uit een opname van een gesprek tussen astronaut Butch Wilmore en het missiecontrolecentrum die dit weekend uitlekte, blijkt dat er iets vreemds aan de hand is met het toestel. “Er
								komt een vreemd geluid uit de luidspreker”, aldus Wilmore. “Ik heb geen idee waar het vandaan komt. Misschien kunnen jullie eens meeluisteren.”
							</h2>
						</div>
						<img src={foto} alt="foto" />
					</div>
				</div>
				<div>
					<div className="TextPicture1">
						<h2>
							Op de opname is vervolgens een pulserend “sonarachtig” geluid te horen. Het missiecontrolecentrum meldt daarna dat het zal onderzoeken waar het mysterieuze geluid vandaan zou kunnen komen. <br /> De opname leidt tot flink wat speculatie
							bij experts en op sociale media. Onder meer de Canadese astronaut Chris Hadfield toont zich bezorgd. “Er zijn verschillende geluiden die ik liever niet in mijn ruimteschip zou horen.
						</h2>
						<h2>
							Waaronder het geluid dat de Boeing Starliner nu maakt”, deelde hij vanmorgen op X. <br /> <br />
							Het is niet duidelijk wat het gevolg van de ontdekking zal zijn. Normaal gezien zou de capsule vrijdag onbemand terugkeren naar de aarde en landen in de woestijn van New Mexico.
						</h2>
					</div>
				</div>
			</div>
		</>
	);
}

export default Text1;
