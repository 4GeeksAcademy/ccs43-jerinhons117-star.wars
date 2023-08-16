import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ButtonFavorites } from "./button";

//import {starWarsImage} from "../src/img/logo.star.wars1.png"

export const Navbar = () => {
	//const {name, uid} = list.item.properties
	
	const { store, actions } = useContext(Context)

	const favorite = store.favorites;


	// useEffect(() => {
    //     console.log("inicia la aplicacion") 
    //     getFavorites()
        
    // },[])



	return (
		<div>
			<nav className=" navbar navbar-light bg-black mb-1 justify-content-between p-2">
					<Link to="/">
						<img className="logo" src="https://i.etsystatic.com/14990737/r/il/c55c01/1732562586/il_570xN.1732562586_nifh.jpg"/>

					</Link>
				<div className="ml-auto">
					<Link to="/demo">
					</Link>
					<div className="btn-group">
							<ButtonFavorites />
					</div>
				</div>
			</nav>

		</div>
	);
};
