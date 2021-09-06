import React, { useState } from 'react'
import PropTypes from 'prop-types';

import ToxicityFilter from './ToxicityFilter';
import InfoModal from './InfoModal';
import PlantList from './PlantList';
import PlantGrid from './PlantGrid';

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
            {
                props.isGridView ? <PlantGrid inventory={props.inventory} toggleModal={toggleModal} /> :
                    <PlantList inventory={props.inventory} toggleModal={toggleModal} />
            }
            <InfoModal toggleModal={toggleModal} open={open} modalData={modalData} />
        </div>
    );
}

PlantSection.propTypes = {
    inventory: PropTypes.array,
    isGridView: PropTypes.bool,
    setGridView: PropTypes.func,
    setToxicity: PropTypes.func,
};

export default PlantSection;
