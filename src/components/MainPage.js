import React, { useState } from 'react'

import PlantSection from "./PlantSection";
import Search from "./Search"
import plantInventory from "../plants.json";

import catRight from '../images/cat-right.png';
import catLeft from '../images/cat-left.png';

const initialState = plantInventory.plants;

const filterByToxicity = (toxicity, inventory) => {
    if (toxicity === 'All') {
        return inventory;
    } else if (toxicity === 'Toxic') {
        let toxicInventory = inventory.filter(item => item.toxicity)
        return toxicInventory;
    } else if (toxicity === 'Non-toxic') {
        let nonToxicInventory = inventory.filter(item => !item.toxicity)
        return nonToxicInventory;
    }
}

function MainPage() {
    const [inventory, setInventory] = useState(initialState);
    const [toxicity, setToxicity] = useState('All');

    return (
        <>
            <div className="search-wrapper">
                <div className="col-2">
                    {/* TODO: Use a high res cat log0, this is a Figma export */}
                    <img src={catLeft} alt="Cat behind a plant on left" className="cat-image" />
                </div>
                <div className="col-8 text-wrapper">
                    <h1>Can my cat eat that?</h1>
                    <p className="instructions">Search and filter common house plants and see what’s safe for Sprinkles to nibble on.</p>
                    <Search inventory={filterByToxicity(toxicity, initialState)} setInventory={setInventory} />
                </div>
                <div className="col-2">
                    {/* TODO: Use a high res cat log0, this is a Figma export */}
                    <img src={catRight} alt="Cat behind a plant on right" className="cat-image" />
                </div>
            </div>
            <div className="plant-view-wrapper">
                <PlantSection inventory={filterByToxicity(toxicity, inventory)} setToxicity={setToxicity} />
            </div>
        </>
    )
}

export default MainPage
