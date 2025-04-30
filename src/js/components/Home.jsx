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
			<div className="container-fluid p-0">
				<Navbar />
			</div>
			<div className="d-flex">
				<div className="container d-inline-flex flex-column align-items-center mx-auto">
					<HeroImage />
					<Portfolio />
					<div className="footer fixed-bottom bg-dark text-light">
						<p>Copyright © IanGarvey</p>
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default Home;