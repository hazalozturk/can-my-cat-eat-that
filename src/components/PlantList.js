import React from 'react';
import PropTypes from 'prop-types';

function PlantList(props) {
    return (
        <ul className="plants-list">
            <hr />
            {props.inventory.map((plant, index) =>
                <div key={index}>
                    <li>
                        <div className="list-wrapper">
                            <img src={require(`../assets/${plant.image}`).default} alt={`avatar of ${plant.names.common}`} className="plant-avatar" onClick={props.toggleModal} plantname={plant.names.common} />
                            <span className="name-col" onClick={props.toggleModal} plantname={plant.names.common}>
                                <h1 className="plant-common-name">{plant.names.common}</h1>
                                <p className="plant-scientific-name">{plant.names.scientific}</p>
                            </span>
                            <span className="token-col">{plant.toxicity ? <p className="toxicity-token toxic list-token">Toxic</p> : <p className="toxicity-token list-token">Non-toxic</p>}</span>
                            <span className="details-col"><p className="plant-details">{plant.details}</p></span>
                        </div>
                    </li>
                    <hr key={index + plant.names.common + 'hr'} />
                </div>
            )}
        </ul>
    );
}

PlantList.propTypes = {
    inventory: PropTypes.array,
    toggleModal: PropTypes.func
};

export default PlantList;