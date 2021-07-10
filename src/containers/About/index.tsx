// Packages
import React from "react";

// Styles
import style from "./style.module.scss";

const About: React.FC<any> = () => {
	// -------------------------------------------------
	// States
	// -------------------------------------------------

	// -------------------------------------------------
	// Hooks
	// -------------------------------------------------

	// -------------------------------------------------
	// Render
	// -------------------------------------------------
	return (
		<div className={style.container}>
			<h1 className={style.mainTitle}>Sobre</h1>
			<p className={style.mainSubtitle}>O jogo Sintonia foi criado para ajudar casais nos momentos de ócio, ou apenas para ter uma noite um pouco mais animada. Com o jogo Sintonia espera-se que os casais se conheçam melhor, discutam pontos importantes das suas vidas ou apenas quebre o gelo para uma noite mais leve. Jogo Indicado para casais recentes ou para casais de longa data, aproveitem :)</p>
		</div>
	);
}

export default About;
