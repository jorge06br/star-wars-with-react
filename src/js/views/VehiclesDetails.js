import React, {useState,useEffect,useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Vehicles from "../component/Vehicles";
	
export const VehiclesDetails=() => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const vehiclesID = params.vehiclesID;
	const [vehicle, setVehicle] = useState(null);

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/vehicles/${vehiclesID}`)
			.then(res => res.json())
			.then(response => setVehicle(response.result.properties));
	}, [vehicle]);

	return (
		<div className="container">
			<div className="">
				{vehicle !== null && (
					<div className="d-flex  mb-3">
						<div>
						<img className="card-img-top"
                            src={
                                `https://starwars-visualguide.com/assets/img/vehicles/${vehiclesID}.jpg`
                            }
                            alt="Card image cap"/>
						</div>
						<div>
							<h5 className="details-table-header">Clase</h5>
							<p>{vehicle.vehicle_class}</p>
							<h5 className="details-table-header">Modelo</h5>
							<p>{vehicle.model}</p>
							<h5 className="details-table-header">Nombre del vehiculo</h5>
							<p>{vehicle.name}</p>
							</div>	
						</div>	
				)}
			</div>	
		</div>
	);
};