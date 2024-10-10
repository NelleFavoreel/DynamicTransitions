# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ["./tsconfig.node.json", "./tsconfig.app.json"],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
	// Set the react version
	settings: { react: { version: "18.3" } },
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs["jsx-runtime"].rules,
	},
});
```

## Instalatie

Clone repository

```
https://github.com/NelleFavoreel/DynamicTransitions.git
```

Ga naar de juiste map van het prject

```
npm install
```

Project starten

```
npm run dev
```

## Uitleg

In dit project moest ik een onderwerp van het internet kiezen en daar een kleine website over maken met verschillende animaties. Ik heb gekozen voor het thema van astronauten die vastzitten in de ruimte.

Verschillende antimaties:

- Particles op de achtergrond (particles.js)
- Typewriter-effect voor de titel (CodePen)
- Inschuivende tekst (React)
- Scroll-animatie naar de volgende pagina met een raket (React)
- Fade-in effect voor de aarde (GSAP)
- Smooth scrolling op de pagina (GSAP)
- Geanimeerde titel (YouTube-tutorial)
- Geanimeerde button (ChatGPT + SliderRevolution)
- Geanimeerde titel (CSS-animaties)
- Overlay-tekst met fade-in effect (GSAP)
- Geanimeerde PNG's (React)

## Bronnen

- [Animation Text](https://www.youtube.com/watch?v=ccO2B40zkv4)
- [Css Animations](https://animate.style/)
- [Krantenartikel onderwerp](https://www.eoswetenschap.eu/psyche-brein/onverwacht-vast-de-ruimte-wat-doet-dat-met-een-mens)
- [Krantenartikel onderwerp](https://www.kidsweek.nl/nieuws/astronauten-zitten-vast-in-ruimtestation-en-kunnen-misschien-volgend-jaar-pas-terug~12d225c)
- [ChatGPT vragen](https://chatgpt.com/share/67067529-2014-8004-a101-fa22fc1c130e)
- [ChatGPT vragen](https://chatgpt.com/share/67067ec4-a2ec-8004-b94d-d73aac8914bb)
- [Particles](https://vincentgarreau.com/particles.js/)
- [Gsap](https://gsap.com/docs/v3/)
- [Codepen (Typemachine animation)](https://codepen.io/caio/pen/ZOjewG)
- [Overlay button rond](https://www.sliderrevolution.com/resources/css-ripple-effect/)
