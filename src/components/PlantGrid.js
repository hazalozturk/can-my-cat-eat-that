import React from 'react';
import PropTypes from 'prop-types';

function PlantGrid(props) {
    return (
        <div className="flex-grid">
            {props.inventory.map((plant, index) =>
                <div className="card" key={index} onClick={props.toggleModal} plantname={plant.names.common}>
                    <img src={require(`../assets/${plant.image}`).default} alt={`shows ${plant.names.common}`} className="plant-image" />
                    <div className="col">
                        <div className="plant-info-row">
                            <p>{plant.names.common}</p>
                            {plant.toxicity ? <p className="toxicity-token toxic">Toxic</p> : <p className="toxicity-token">Non-toxic</p>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

PlantGrid.propTypes = {
    inventory: PropTypes.array,
    toggleModal: PropTypes.func
};

export default PlantGrid;