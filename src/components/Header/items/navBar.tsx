// Packages
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// import style from "./style.module.scss";

function Navbar ({ navClass, linkClassName, items }: any) {
	return (
    <NavComponent 
		navClass={navClass}
        linkClassName={linkClassName}
		items={items}
    />
)};


export function NavComponent({onClick, navClass, linkClassName, items}: any) {
	// -------------------------------------------------
	// States
	// -------------------------------------------------
    let [translate, setTranslate ] = useState(true);

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
		<nav className={navClass}>
			{items.map((section: any)=>
				<Link to={section}
					className={linkClassName}
					onClick={onClick}>
					{section}
				</Link>
			)}
		</nav>
	);
}

export default Navbar;