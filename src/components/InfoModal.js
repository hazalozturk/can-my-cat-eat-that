import React from 'react';

import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

function InfoModal(props) {
    let plant = props.modalData;
    return (
        <Modal
            style={{
                overlay: {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                },
                content: {
                    position: 'absolute',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px',
                    width: '40vw'
                }
            }}
            ariaHideApp={false}
            isOpen={props.open}
            onRequestClose={props.toggleModal}
            contentLabel="Plant Modal"
        >
            <div className="modal-header">
                <i onClick={props.toggleModal}><FontAwesomeIcon icon={faWindowClose} size="lg" className="modal-close" /></i>
            </div>
            <img src={require(`../${plant.image}`).default} alt={'shows' + ' ' + plant.names.common} className="modal-image" />
            <div className="col">
                <div className="plant-info-row">
                    <span>
                        <h1 className="plant-common-name">{plant.names.common}</h1>
                        <p className="plant-scientific-name">{plant.names.scientific}</p>
                    </span>
                    {plant.toxicity ? <p className="toxicity-token toxic">Toxic</p> : <p className="toxicity-token">Non-toxic</p>}
                </div>
            </div>
            <span className="details-col"><p className="plant-details">{plant.details}</p></span>
        </Modal>
    );
}

export default InfoModal;