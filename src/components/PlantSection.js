import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

const toDo = () => {
    alert('TODO: toggle')
};

function PlantSection(props) {
    return (
        <div>
            <div className="selection-flex-grid">
                <div>
                    <p>Toxicity</p>
                    <p>TODO: Dropdown</p>
                </div>
                <div className="toggle-wrapper selection-flex-grid">
                    <div>
                        <p>View Options</p>
                        <i className="toggle-icon" onClick={toDo}><FontAwesomeIcon icon={faGripVertical} size="lg" /></i >
                        <i className="toggle-icon" onClick={toDo}><FontAwesomeIcon icon={faList} size="lg" /></i >
                    </div>
                </div>
            </div>
            <div className="flex-grid">
                {props.inventory.map((plant, index) =>
                    <div className="card" key={index}>
                        <img src={require(`../${plant.image}`).default} alt={plant.names.scientific} className="plant-image" />
                        <div className="col">
                            <div className="plant-info-row">
                                <p className="plant-name">{plant.names.common}</p>
                                {plant.toxicity ? <p>Toxic</p> : <p>Non-toxic</p>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PlantSection;
