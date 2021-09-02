import React from 'react'
import catRight from '../assets/cat-right.png';
import catLeft from '../assets/cat-left.png';

function MainPage() {
    return (
        <div className="search-wrapper">
            <div className="col-2">
                {/* TODO: Use a high res cat log0, this is a Figma export */}
                <img src={catLeft} alt="Cat behind a plant on left" className="cat-image" />
            </div>
            <div className="col-8 text-wrapper">
                <h1>Can my cat eat that?</h1>
                <p className="instructions">Search and filter common house plants and see what’s safe for Sprinkles to nibble on.</p>
            </div>
            <div className="col-2">
                {/* TODO: Use a high res cat log0, this is a Figma export */}
                <img src={catRight} alt="Cat behind a plant on right" className="cat-image" />
            </div>
        </div>
    )
}

export default MainPage
