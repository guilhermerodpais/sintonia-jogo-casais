// Packages
import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// Style
import style from "./style.module.scss";

// Parts
import Navbar from './items/navBar';
import SmallScreensNavbar from './items/smallScreensNav';
import { HandleWindowSize } from '../../utils/customHooks';


function Header() {
	// -------------------------------------------------
	// States
	// -------------------------------------------------
	const [width, height] = HandleWindowSize();

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
		<header className={`${style.header} header`}>
            <div className={style.headerInner}>
                
                { width > 1000 && <Navbar items={["sobre"]} />}
				<Link to="/" className={`${style.logo} nav-link`}>	 
                      Sintonia
                </Link>
				{ width > 1000 && <Navbar items={["contato"]} />}
				{ width < 1000 && <SmallScreensNavbar /> }
            </div>
        </header>
	);
}

export default Header;
