import React, {useContext} from 'react'
import {Link, useParams} from "react-router-dom";
import {Context} from '../store/appContext'

const Planets = () => {
    const {store, actions} = useContext(Context)
    const params = useParams();
    return (

        <div className='scrolling-wrapper'>
            <h1>Planets</h1>
            {
            store.PlanetsArr.map((elem,index) => {
                return (
                    <div className="card" id='CardContainer'
                        key={index}>
                        <img className="card-img-top"
                            src={
                                `https://starwars-visualguide.com/assets/img/planets/${
                                    elem.uid
                                }.jpg` 
                            }
                            onError={
                                (e) => (e.target.onerror = null, e.target.src ='https://starwars-visualguide.com/assets/img/big-placeholder.jpg')
                            }/>
                        <div className="card-body my-2 p-0">
                            <h5 className="card-title">
                                <Link to={
                                        `/PlanetDetails/${
                                            index + 1
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

export default Planets
