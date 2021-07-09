// Packages
import React from "react";
import { withRouter } from "react-router-dom";
// import { useSelector } from "react-redux";

// import style from "./style.module.scss";

// Types
import {  IProps } from "./types";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Main: React.FC<IProps> = ({ children }) => {
	// -------------------------------------------------
	// States
	// -------------------------------------------------
	// const [userCredentials, setUserCredentials] = useState<UserCredentials>({
	// 	username: "",
	// 	password: "",
	// });

	// -------------------------------------------------
	// Hooks
	// -------------------------------------------------
	// const isFirstAccess = useSelector(
	// 	(state: IRootState) => state.accessController.firstAccess
	// );

	// -------------------------------------------------
	// Render
	// -------------------------------------------------
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default withRouter(Main);
