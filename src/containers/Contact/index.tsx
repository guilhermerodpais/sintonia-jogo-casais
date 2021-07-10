// Packages
import React from "react";

// Styles
import style from "./style.module.scss";

const Contact: React.FC<any> = () => {
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
			<h1 className={style.mainTitle}>Contato</h1>
			<p className={style.mainSubtitle}>Para dúvidas, sugestões ou solicitações de projetos, enviar e-mail para guilhermepais2013@gmail.com</p>
		</div>
	);
}

export default Contact;
