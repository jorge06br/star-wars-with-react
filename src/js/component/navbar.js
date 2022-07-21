import {Link} from "react-router-dom";
import SWlogo from "/workspace/react-hello-webapp/src/img/SW-LOGO.png"
import {Context} from "../store/appContext";
import React, {useContext} from "react";

export const Navbar = () => {
    const {store, actions} = useContext(Context);
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/">
                <img className="navbar-brand logo"
                    src={SWlogo}/>
            </Link>

            <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                Favorites{
                        store.Favorites.length === 0 ? "" :store.Favorites.length
                    }
                </button>
                <div className="dropdown-menu">
                {
                    store.Favorites.length > 0 ? store.Favorites.map((item, index) => {
                        return (
                            <a className="dropdown-item p-1" href="#"
                                key={index}>
                                {
                            item.elem.name
                            }
                                <span className="float-right">
                                <i className="fa-solid fa-trash-can"onClick={() => actions.removeFavorite(index)}></i> 
                                </span>
                            </a>
                        );
                    }) : " No Favorites Added"
                }
                </div>
            </div>
            </nav>

    );
};
