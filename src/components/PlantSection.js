import React, { useState } from 'react'

import ToxicityFilter from './ToxicityFilter';
import InfoModal from './InfoModal';
import '../styles/Plant.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'


function PlantSection(props) {
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(props.inventory[0]);

    const switchToGrid = () => {
        props.setGridView(true);
    };

    const switchToList = () => {
        props.setGridView(false);
    };

    const toggleModal = (event) => {
        event.preventDefault();
        let plantName = event.currentTarget.getAttribute('plantname');
        if (plantName) {
            setModalData(props.inventory.filter(item => item.names.common === plantName)[0]);
        }
        setOpen(!open);
    }

    return (
        <div>
            <div className="selection-flex-grid">
                <div>
                    <p className="bold-text">Toxicity</p>
                    <ToxicityFilter setToxicity={props.setToxicity} />
                </div>
                <div className="toggle-wrapper selection-flex-grid">
                    <div className="toggle-sub-wrapper">
                        <p className="bold-text">View Options</p>
                        <i className="toggle-icon" onClick={switchToGrid}><FontAwesomeIcon icon={faGripVertical} size="lg" /></i >
                        <i className="toggle-icon" data-testid="list-toggle" onClick={switchToList}><FontAwesomeIcon icon={faList} size="lg" /></i >
                    </div>
                </div>
            </div>
            {props.isGridView ?
                <div className="flex-grid">
                    {props.inventory.map((plant, index) =>
                        <div className="card" key={index} onClick={toggleModal} plantname={plant.names.common}>
                            <img src={require(`../assets/${plant.image}`).default} alt={`shows ${plant.names.common}`} className="plant-image" />
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
                        <div key={index}>
                            <li>
                                <div className="list-wrapper">
                                    <img src={require(`../assets/${plant.image}`).default} alt={`avatar of ${plant.names.common}`} className="plant-avatar" onClick={toggleModal} plantname={plant.names.common} />
                                    <span className="name-col" onClick={toggleModal} plantname={plant.names.common}>
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
            }
            <InfoModal toggleModal={toggleModal} open={open} modalData={modalData} />
        </div>
    );
}

export default PlantSection;
