import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Plant.css';
import '../styles/Modal.css';

import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function InfoModal(props) {
    let plant = props.modalData;
    return (
        <Modal
            style={{
                overlay: {
                    backgroundColor: 'rgba(22, 32, 32, 0.68)'
                },
                content: {
                    border: 'none',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '12px',
                    outline: 'none',
                    padding: '0',
                    width: '40vw',
                    left: '30vw',
                    maxHeight: '85vh'
                }
            }}
            closeTimeoutMS={300}
            ariaHideApp={false}
            isOpen={props.open}
            onRequestClose={props.toggleModal}
            contentLabel="Plant Modal"
        >
            <div className="modal-header">
                <h2 className="modal-header-text">Plant Details</h2>
                <i onClick={props.toggleModal}><FontAwesomeIcon icon={faTimes} className="modal-close" /></i>
            </div>
            <div className="col modal-content">
                <div className="modal-plant-info-row">
                    <img src={require(`../assets/${plant.image}`).default} alt={`shows ${plant.names.common}`} className="modal-image" />
                    <span className="modal-info-span">
                        <h1 className="plant-common-name">{plant.names.common}</h1>
                        <p className="plant-scientific-name">{plant.names.scientific}</p>
                        {plant.toxicity ? <p className="toxicity-token toxic modal-token">Toxic</p> : <p className="toxicity-token modal-token">Non-toxic</p>}
                    </span>
                </div>
            </div>
            <hr className="modal-hr" />
            <span className="details-col">
                <p className="content-title">Details</p>
                <p className="plant-details modal-content">{plant.details}</p>
            </span>
            {plant.toxicity && <span className="details-col">
                <hr className="modal-hr" />
                <p className="content-title">Toxicity</p>
                <ul>
                    <li className="plant-details">{plant.toxicity.property}</li>
                    <li className="plant-details">{plant.toxicity.symptoms}</li>
                </ul>
                <p className="toxicity-alert">If you suspect your pet may have ingested a potentially toxic substance, contact your local veterinarian as soon as possible.</p>
            </span>}
            <hr className="modal-hr" />
            <div className="modal-footer">
                <button onClick={props.toggleModal} className="close-button">Close</button>
            </div>
        </Modal>
    );
}

InfoModal.propTypes = {
    modalData: PropTypes.object,
    open: PropTypes.bool,
    toggleModal: PropTypes.func
};

export default InfoModal;