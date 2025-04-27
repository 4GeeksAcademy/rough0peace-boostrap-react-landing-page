import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./NavBar";
import { HeroImage } from "./HeroImage";
import { Portfolio } from "./Portfolio"

//create your first component
const Home = () => {
	return (
		<div className="container-main">
			<Navbar />
			<div className="container-page-body">
				<HeroImage />
				<Portfolio />
				<div className="footer fixed-bottom bg-dark text-light">
					<p>Copyright © IanGarvey</p>
				</div>
			</div>
		</div>
	);
};

export default Home;