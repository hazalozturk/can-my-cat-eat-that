import React, { useState } from 'react';
import inventory from "../plants.json";

function PlantView() {
    return (
        <div>
            <p>TODO: filter and toggle</p>

            <div className="flex-grid">
                {inventory.plants.map((plant, index) =>
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

export default PlantView;
