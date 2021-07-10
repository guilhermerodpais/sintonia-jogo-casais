// Packages
import React, { useState } from "react";

// Styles
import style from "./style.module.scss";

function Button({onClick, name, onHover, children, title, selectedItem}: any) {
	// -------------------------------------------------
	// States
	// -------------------------------------------------

	// -------------------------------------------------
	// Hooks
	// -------------------------------------------------

	// -------------------------------------------------
	// Functions
	// -------------------------------------------------

	// -------------------------------------------------
	// Render
	// -------------------------------------------------
	return (
		<button 
			name={name}
			onMouseEnter={onHover}
			onClick={onClick}
			className={`${style.button} ${selectedItem ? style.buttonSelected : ""}`}
		>
			{children}
			{title}
		</button>
	);
}

export default Button;