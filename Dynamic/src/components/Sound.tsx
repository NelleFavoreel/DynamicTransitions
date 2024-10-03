import { animated } from "@react-spring/web";
import foto from "../assets/Foto.avif";

function Text1() {
	return (
		<>
			<div className="textFlex1">
				<div>
					<div>
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
				<div></div>
			</div>
		</>
	);
}

export default Text1;
