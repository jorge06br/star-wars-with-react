import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Planets from "../component/Planets";
	
export const PlanetDetails=() => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const PlanetID = params.PlanetID;
	const [planet, setPlanet] = useState(null);

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets/${PlanetID}`)
			.then(res => res.json())
			.then(response => setPlanet(response.result.properties));
	}, [planet]);
	return (
		<div className="container">
			<div className="">
				{planet !== null && (
					<div className="d-flex  mb-3">
						<div>
						<img className="card-img-top"
                            src={
                                `https://starwars-visualguide.com/assets/img/planets/${
                                    PlanetID
                                }.jpg`
                            }
                            alt="Card image cap"/>
						</div>
						<div>
							<h5 className="details-table-header">Diameter</h5>
							<p>{planet.diameter}</p>
							<h5 className="details-table-header">Population</h5>
							<p>{planet.population}</p>
							<h5 className="details-table-header">Climate</h5>
							<p>{planet.climate}</p>
							<h5 className="details-table-header">Water Surface</h5>
							<p>{planet.surface_water}</p>
							<h5 className="details-table-header">Terrain</h5>
							<p>{planet.terrain}</p>
							<h5 className="details-table-header">Rotation period</h5>
							<p>{planet.rotation_period}</p>
							</div>	
						</div>	
				)}
			</div>
			{store.PlanetsArr.length > 0 && <Planets url={store.PlanetsArr[PlanetID].url}/>}	
		</div>
	);
};

