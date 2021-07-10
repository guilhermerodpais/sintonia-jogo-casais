// Packages
import React from "react";
import { useLocation } from 'react-router-dom';
// import { useSelector } from "react-redux";

// import style from "./style.module.scss";


function Quiz() {
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
	const { state } = useLocation();

	// -------------------------------------------------
	// Functions
	// -------------------------------------------------
	// const onFetchFirstLogin = async (values: UserCredentials) => {
	// 	setUserCredentials(values);
	// };

	// -------------------------------------------------
	// Render
	// -------------------------------------------------
	return (
		<div>
			{console.log('state', state)}
            <p>teste quiz</p>
		</div>
	);
}

export default Quiz;
