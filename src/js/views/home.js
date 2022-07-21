import React from "react";
import "../../styles/home.css";
import Characters from "../component/Characters";
import Planets from "../component/Planets";
import Vehicles from "../component/Vehicles";



export const Home = () => (

	<div className="text-center mt-5">
			<div>
			<Characters/>	
			<Planets/>
			<Vehicles/>
			</div>
	</div>
);
