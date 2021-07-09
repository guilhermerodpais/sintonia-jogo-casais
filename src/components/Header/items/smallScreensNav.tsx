// Packages
import React, { useState } from "react";

// Style
import style from "../style.module.scss";

// Parts
import { NavComponent } from './navBar';


function SmallScreensNav() {
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
		<div> 
             <button 
			 	className={style.hamburgerBtn}
                onClick= {()=> setTranslate(!translate)}
			> 
                 {translate?<span>&#9776;</span>:<span>&times;</span>}
             </button>
             <div id="sidebar-list" className={`${translate? style.addTransiton : style.removeTransition}`}>
                <NavComponent
                    navClass="nav-small"
                    linkClassName={style.navSmallLink}
                    onClick = {()=>setTranslate(true)} 
					items={["sobre","contato"]}
                />
             </div>
        </div>
	);
}

export default SmallScreensNav;
