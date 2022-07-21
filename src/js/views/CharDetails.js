import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Characters from "../component/Characters";


			
export const CharDetails=() => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const peopleID = params.peopleID;
	const [person, setPerson] = useState(null);

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${peopleID}`)
			.then(res => res.json())
			.then(response => setPerson(response.result.properties))	
			}, [person]);
			
	return (
		<div className="container">
			<div className="">
				{person !== null && (
					<div className="d-flex  mb-3">
						<div>
						<img className="card-img-top"
                            src={
                                `https://starwars-visualguide.com/assets/img/characters/${
                                    peopleID
                                }.jpg`
                            }
                            alt="Card image cap"/>
						</div>
						
						<div>
							<h5 className="details-table-header">Birth Year</h5>
							<p>{person.birth_year}</p>
							<h5 className="details-table-header">Height</h5>
							<p>{person.height}</p>
							<h5 className="details-table-header">Mass</h5>
							<p>{person.mass}</p>
							<h5 className="details-table-header">Gender</h5>
							<p>{person.gender}</p>
							<h5 className="details-table-header">Hair color</h5>
							<p>{person.hair_color}</p>
							<h5 className="details-table-header">Eye color</h5>
							<p>{person.eye_color}</p>
							</div>	
						</div>
						)}
			</div>
			{store.PersArr.length > 0 && <Characters url={store.PersArr[peopleID].url}/>}	
		</div>
	);
};

