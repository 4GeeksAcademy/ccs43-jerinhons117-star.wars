import React, {useState, useContext}  from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const InfCard = (descripD) => {
    const {store, actions} = useContext(Context)
    const {name, height, mass, skin_color} = descripD.item.properties
    return(
        <div className="container_inf">
            <div className="d-flex justify-content-center align-items-center">
                <img src="https://i.etsystatic.com/14990737/r/il/59231e/1256070126/il_fullxfull.1256070126_cr3m.jpg" className="card-img-top" alt="..."/> 
            </div>
            <div className="text-light">
                 <h3 text-danger >{name}</h3>
                <p>height: {height}</p>
                <p>mass: {mass}</p>
                <p>skin_color: {skin_color}</p>
                <p>height: {height}</p>
            </div>

        </div>
    )
}