import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Navbar } from "../component/navbar";

export const Home = () => (
	<div className=" container-fluid text-center mt-5 d-flex mx-5">
		<div className="container_card">
			<Cards />
		</div>
	</div>
);
