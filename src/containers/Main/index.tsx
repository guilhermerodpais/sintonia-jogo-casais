// Packages
import React from "react";
import { withRouter } from "react-router-dom";

// Types
import {  IProps } from "./types";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Styles
import style from "./style.module.scss";

const Main: React.FC<IProps> = ({ children }) => {
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
		<div className={style.wrapper}>
			<Header />
			<div className={style.content}>{children}</div>
			<Footer />
		</div>
	);
}

export default withRouter(Main);
