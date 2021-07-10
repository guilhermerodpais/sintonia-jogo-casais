// Packages
import React, { useState } from "react";
// import { useSelector } from "react-redux";

// Styles
import style from "./style.module.scss";

// Components
import Button from "../../components/ButtonArray";

// Parts
import HomeTitle from "../../assets/svg/titleHome.svg";
import OriginalBanner from "../../assets/images/original.jpg";
import CuteBanner from "../../assets/images/cute.jpg";
import FunBanner from "../../assets/images/fun.jpg";
import HotBanner from "../../assets/images/hot.jpg";
import { ReactComponent as CuteSVG } from "../../assets/svg/heart.svg";
import { ReactComponent as FunSVG } from "../../assets/svg/smile.svg";
import { ReactComponent as HotSVG } from "../../assets/svg/thermometer.svg";

function Home() {
	// -------------------------------------------------
	// States
	// -------------------------------------------------
	const [hoveredCategory, setHoveredCategory] = useState({
		type: "original",
		title: "",
		imagePath: OriginalBanner,

	});
	const [selectedCategorie, setSelectedCategorie] = useState("");
	const [selectedCategories, setSelectedCategories] = useState([] as any);

	// -------------------------------------------------
	// Hooks
	// -------------------------------------------------
	// const isFirstAccess = useSelector(
	// 	(state: IRootState) => state.accessController.firstAccess
	// );

	// -------------------------------------------------
	// Utils
	// -------------------------------------------------
	const categories = ["cute", "fun", "hot"];

	// -------------------------------------------------
	// Functions
	// -------------------------------------------------

	const handleGetCategoryDetails = (type: string) => {
		let image = OriginalBanner;
		let title = "";
		if(type === "cute") {
			image = CuteBanner;
			title = "Fofas";
		}
		else if(type === "fun") {
			image = FunBanner;
			title = "Divertidas";
		}
		else if(type === "hot") {
			image = HotBanner;
			title = "Picantes";
		}
		  return { image, title};
	};

	const onCategoryHover = async (type: string) => {
		const getDetails = handleGetCategoryDetails(type);
		setHoveredCategory({imagePath: getDetails.image , title: getDetails.title, type});
	};

	const handleChangeCategoryExists = (name: string) => selectedCategories.find((e: any)=>(e === name));

	const handleChangeCategory = (name: string) => {
		const existsInArray = handleChangeCategoryExists(name);
		if(!!existsInArray) {
			// Remove
			setSelectedCategories(selectedCategories.filter((e: any)=>(e !== name)));
		} else {
			// Add
			setSelectedCategories([...selectedCategories, name]);
		}
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------
	return (
		<>
            <div className={style.imageContainer}>
				<div  className={style.imageContainerBox}>
					<img src={hoveredCategory.imagePath} className={style.imageContainerInfo} />
					<h2 className={style.imageTitleContainerInfo} >{hoveredCategory.title}</h2>
				</div>
			</div>
			<div className={style.contentHomeContainer}>
				<div className={style.titleContainerBox}>
					<img src={HomeTitle} className={style.titleContainerInfo} />
					<p>Selecione um ou mais temas para seguir</p>
				</div>
				<div  className={style.selectionContainerBox}>
				{categories.map((item: string) => {
					const title = handleGetCategoryDetails(item).title;
					const isSelected = handleChangeCategoryExists(item);
					return(
					<Button 
						name={item}
						onHover={() => onCategoryHover(item)}
						onClick={() => handleChangeCategory(item)}
						title={title}
						selectedItem={!!isSelected}
					>
						<CuteSVG className={style.selectionContainerBoxButtonSVG} />
					</Button>
				)})}
				</div>
			</div>
		</>
	);
}

export default Home;
