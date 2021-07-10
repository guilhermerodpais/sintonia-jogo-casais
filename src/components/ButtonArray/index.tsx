// Packages
import React, { useState } from "react";

// Styles
import style from "./style.module.scss";

function Button({onClick, name, onHover, children, title, selectedItem, array}: any) {
	// -------------------------------------------------
	// States
	// -------------------------------------------------
    let [selected, setSelected ] = useState(false);

	// -------------------------------------------------
	// Hooks
	// -------------------------------------------------

	// -------------------------------------------------
	// Functions
	// -------------------------------------------------

	const handleIsSelected = (name: string) => array.find((e: any)=>{
		console.log('array', array); 
		console.log('e', e);
		console.log('name', name);
		console.log('----');
		return (e === name)});

	// -------------------------------------------------
	// Render
	// -------------------------------------------------
	return (
		<button 
			name={name}
			onMouseEnter={onHover}
			onClick={onClick}
			className={`${style.button} ${!!handleIsSelected(selectedItem) ? style.buttonSelected : ""}`}
		>
			{children}
			{title}
		</button>
	);
}

export default Button;