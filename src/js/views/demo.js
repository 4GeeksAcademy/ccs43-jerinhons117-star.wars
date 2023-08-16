import React, { useState, useEffect, useContext } from "react";
import { Link,  useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import {InfCard} from "../component/infCard.js"

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const { inf, id} = useParams()
	const [item, setItem] = useState({})
	const getItem = () => {
		const item = store[inf].find(element => element.uid == id)
		setItem(item)
	}
	
	useEffect(() => {
		getItem()
	}, [store[inf]])

	return (
		<div className="container">
			<div className="card bg-transparent mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						
					<img src={`https://starwars-visualguide.com/assets/img/${inf}/${id}.jpg`} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title  text-white">{item?.properties?.name} history</h5>
					</div>
						<p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

					</div>
				</div>
				</div>
				<div className="accordion" id="accordionExample">
			<div className="accordion-item bg-transparent text-light">
				<h2 className="accordion-header">
				<button className="accordion-button bg-transparent text-light fw-bold fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					Description
				</button>
				</h2>
				<div id="collapseOne" className="accordion-collapse collapse show " data-bs-parent="#accordionExample">
				<div className="accordion-body">
					{item?.description}
				</div>
				</div>
			</div>
			<div className="accordion-item bg-transparent text-light">
				<h2 className="accordion-header">
				<button className="accordion-button collapsed bg-transparent text-light fw-bold fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					General
				</button>
				</h2>
				<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
				<div className="accordion-body text-light">
				{
						//condicion en caso de que la descripcion concuerde con planets	imprima las card de planetas
						inf == "planets" ?(
							<div>
								<p className="text-start text-danger m-0">Name: {item?.properties?.name}</p>
								<p className="text-start text-danger m-0">Terrain: {item?.properties?.terrain}</p>
								<p className="text-start text-danger m-0">Surface_water: {item?.properties?.surface_water}</p>
								<p className="text-start text-danger m-0">Created: {item?.properties?.created}</p>
								<p className="text-start text-danger m-0">Edited: {item?.properties?.edited}</p>
								<p className="text-start text-danger m-0">Orbital period: {item?.properties?.orbital_period}</p>
								<p className="text-start text-danger m-0">Population: {item?.properties?.population}</p>
								<p className="text-start text-danger m-0">Terrain: {item?.properties?.terrain}</p>
								<p className="text-start text-danger m-0">Diameter: {item?.properties?.diameter}</p>
								<p className="text-start text-danger m-0">Diameter: {item?.properties?.diameter}</p>
								<p className="text-start text-danger m-0">Gravity: {item?.properties?.gravity}</p>
							</div>
						):(
						//caso contrario imprima personajes
							<div>
								<p className="text-start text-danger m-0">Name {item?.properties?.name}</p>
								<p className="text-start text-danger m-0">Gender: {item?.properties?.gender}</p>
								<p className="text-start text-danger m-0">Eyes color: {item?.properties?.eyes_color}</p>
								<p className="text-start text-danger m-0">Hair color: {item?.properties?.hair_color}</p>
								<p className="text-start text-danger m-0">Hair color: {item?.properties?.hair_color}</p>
								<p className="text-start text-danger m-0">Height: {item?.properties?.height}</p>
								<p className="text-start text-danger m-0">Mass: {item?.properties?.mass}</p>
								<p className="text-start text-danger m-0">Birht year: {item?.properties?.birht_year}</p>
								<p className="text-start text-danger m-0">Created: {item?.properties?.created}</p>
								<p className="text-start text-danger m-0">Edited: {item?.properties?.edited}</p>
								<p className="text-start text-danger m-0">Homeworld: {item?.properties?.homeworld}</p>
							</div>
						)
					}
				</div>
				</div>
			</div>
			</div>
		</div>
	);
};
// {`https://starwars-visualguide.com/assets/img/${item.properties.types}/${item.properties.uid}.jpg`}

/*{store.demo.map((item, index) => {
	return (
		<li
			key={index}
			className="list-group-item d-flex justify-content-between"
			style={{ background: item.background }}>
			<Link to={"/single/" + index}>
				<span>Link to: {item.title}</span>
			</Link>
			{// Conditional render example
			// Check to see if the background is orange, if so, display the message
			item.background === "orange" ? (
				<p style={{ color: item.initial }}>
					Check store/flux.js scroll to the actions to see the code
				</p>
			) : null}
			<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
				Change Color
			</button>
		</li>
	);
})}*/