import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";
// import myvideo from "../../video/space.mp4";

export const Home = () => {

	
	const { store, actions } = useContext(Context)




	return (
			// Contenedor Padre de lo personajes "Characters"

			<div>
				<div className="character m-5 bg-transparent">
						<h1 className="tittleCharacter text-danger mt-3">Characters</h1>
					<div className="fatherCharacter d-flex text-center mt-5 gap-3">
						{store.characters.map((character) => {
							return (<Cards item={character} key={character._id} types={"characters"} />)
						})}

					</div>

				</div>

				
					<div className="Planets m-5 bg-transparent">
							<h1 className="tittlePlanets text-danger mt-5">Planets</h1>
						<div className="fatherPlanets d-flex text-center mt-5 gap-3">
							{store.planets.map((planets) => {
								return (<Cards item={planets} key={planets._id} types={"planets"} />)
							})}

						</div>

					</div>
			
			</div>

	
	);
};
{/* <video>
	<source src={myvideo} type="video/mp4"/>
</video> */}