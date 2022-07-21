import React, {useContext} from 'react'
import {Context} from '../store/appContext'
import {Link, useParams} from "react-router-dom";

const Vehicles = () => {
    const {store, actions} = useContext(Context)

    return (
        <div className='scrolling-wrapper'>
            <h1>Vehicles</h1>
            {
            store.VehiclesArr.map((elem, index) => {
                return (
                    <div className="card" id='CardContainer'
                        key={index}>
                        <img className="card-img-top"
                            src={
                                `https://starwars-visualguide.com/assets/img/vehicles/${
                                    elem.uid
                                }.jpg`
                            }
                            alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to={
                                        `/VehiclesDetails/${
                                            elem.uid
                                        }`
                                    }
                                    className="btn btn-primary">
                                    {
                                    elem.name
                                } </Link>
                                <div className="favorite-button btn btn-outline-danger ml-3"
                                    onClick={
                                        () => actions.addFavorite({elem})
                                }>
                                    <i className=" fa fa-heart"/>
                                </div>
                            </h5>
                        </div>
                    </div>
                )
            })
        } </div>
    )
}

export default Vehicles
