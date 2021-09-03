import React from 'react';
import ToxicityFilter from './ToxicityFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

function PlantSection(props) {
    const switchToGrid = () => {
        props.setGridView(true);
    };

    const switchToList = () => {
        props.setGridView(false);
    };
    return (
        <div>
            <div className="selection-flex-grid">
                <div>
                    <p className="bold-text">Toxicity</p>
                    <ToxicityFilter setToxicity={props.setToxicity} />
                </div>
                <div className="toggle-wrapper selection-flex-grid">
                    <div>
                        <p className="bold-text">View Options</p>
                        <i className="toggle-icon" onClick={switchToGrid}><FontAwesomeIcon icon={faGripVertical} size="lg" /></i >
                        <i className="toggle-icon" onClick={switchToList}><FontAwesomeIcon icon={faList} size="lg" /></i >
                    </div>
                </div>
            </div>
            {props.isGridView ?
                <div className="flex-grid">
                    {props.inventory.map((plant, index) =>
                        <div className="card" key={index}>
                            <img src={require(`../${plant.image}`).default} alt={plant.names.scientific} className="plant-image" />
                            <div className="col">
                                <div className="plant-info-row">
                                    <p>{plant.names.common}</p>
                                    {plant.toxicity ? <p className="toxicity-token toxic">Toxic</p> : <p className="toxicity-token">Non-toxic</p>}
                                </div>
                            </div>
                        </div>
                    )}
                </div> :
                <ul className="plants-list">
                    <hr />
                    {props.inventory.map((plant, index) =>
                        <>
                            <li key={index}>
                                <div className="list-wrapper">
                                    <img src={require(`../${plant.image}`).default} alt={'avatar of' + ' ' + plant.names.common} className="plant-avatar" />
                                    <span className="name-col">
                                        <p className="plant-common-name">{plant.names.common}</p>
                                        <p className="plant-scientific-name">{plant.names.scientific}</p>
                                    </span>
                                    <span className="token-col">{plant.toxicity ? <p className="toxicity-token toxic">Toxic</p> : <p className="toxicity-token">Non-toxic</p>}</span>
                                    <span className="details-col"><p className="plant-details">{plant.details}</p></span>
                                </div>
                            </li>
                            <hr key={index + plant.names.common + 'hr'} />
                        </>
                    )}
                </ul>
            }
        </div>
    );
}

export default PlantSection;
