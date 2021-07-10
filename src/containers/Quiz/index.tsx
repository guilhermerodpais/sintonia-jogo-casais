// Packages
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
// import { useSelector } from "react-redux";

// Parts
import questions from "../../utils/questions";
import { ReactComponent as BottleSVG } from "../../assets/svg/bottleBackground.svg";
import { ReactComponent as HeartSVG } from "../../assets/svg/angelsBackground.svg";

// Styles
import style from "./style.module.scss";


function Quiz() {
	// -------------------------------------------------
	// States
	// -------------------------------------------------
	const [currentQuotes, SetCurrentQuotes] = useState([] as any);
	const [currentQuote, SetCurrentQuote] = useState({
		category: "",
		text: "Vamos começar?"
	});
	// -------------------------------------------------
	// Hooks
	// -------------------------------------------------
	const { state }: any = useLocation();

	// -------------------------------------------------
	// Functions
	// -------------------------------------------------
	const newQuote = () => {
		let randonNumber = Math.floor(Math.random() * currentQuotes.length);
		SetCurrentQuote(currentQuotes[randonNumber]);
	};

	const getNameCategory = (type: string) => {
		let response = "";
		if (type === "cute") {
			response = "Fofas";
		}
		else if (type === "fun") {
			response = "Divertidas";
		}
		else if (type === "hot") {
			response = "Picantes";
		}
		return response;
	};

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		const { categories } = state;
		let arr: any = [];

		categories.forEach(function (item: any) {
			Object.entries(questions).reduce(function (filtered: any, option) {
				if (option[0] === item) {
					option[1].map((text: string) => {
						const obj = { category: item, text }
						arr.push(obj);
						return obj;
					}
					)
				}
				return filtered;
			}, []);

		});
		SetCurrentQuotes(arr)
	}, [state]);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------
	return (
		<div className={style.containerQuiz}>
			<span className={style.mainQuestionCategory}>{getNameCategory(currentQuote.category)}</span>
			<h1 className={style.mainQuestion}>{currentQuote.text}</h1>
			<button onClick={() => newQuote()} className={style.newMainQuestionButton}>Nova pergunta</button>
			
			{/* SVG */}
			<div className={style.containerQuizBottleBackground}><BottleSVG /></div>
			<div className={style.containerQuizHeartBackground}><HeartSVG /></div>
		</div>
	);
}

export default Quiz;
