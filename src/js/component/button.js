import React, {useContext} from "react";
import { Context } from "../store/appContext.js";

export const ButtonFavorites = () => {
     const {store, actions} = useContext(Context);

     const favorite = store.favorites;

     return (
        <div className="dropdown">
            <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Favorites
                    <span className="position-absolute top-1 start-90  badge rounded-circle bg-warning ">
                        {favorite.length}
                    </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                {favorite.length === 0 ? (
                    <li><span className="dropdown-item"> No favorites selected </span></li>
                ) : (
                    favorite.map((item, id) => (
                        <li key={id} className="d-flex justify-content-between m-2  ">
                            <span className="dropdown-items text-light">{item}</span>
                            <button type="button" className="btn btn-outline-danger ms-2"
                            onClick={() => {actions.removeFavorites(id)}}>
                            <i className="fa fa-trash"></i>
                            </button>
                        </li>
                    ))                
                )
                }
            </ul>
        </div>
     )
}