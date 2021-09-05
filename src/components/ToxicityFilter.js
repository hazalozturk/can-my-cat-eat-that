import React from 'react';
import '../styles/ToxicityFilter.css';
export default class ToxicityFilter extends React.Component {
    changeToxicity = (event) => {
        this.props.setToxicity(event.target.options[event.target.selectedIndex].value)
    }
    render() {
        return (
            <>
                <label id="toxicityDropdown" htmlFor="toxicity" className="sr-only">Select Filter</label>
                <select name="toxicity" id="toxicity" onChange={this.changeToxicity} className="toxicity-filter-dropdown" data-testid="toxicity" aria-labelledby="toxicityDropdown">
                    <option value="All">All</option>
                    <option value="Toxic">Toxic</option>
                    <option value="Non-toxic">Non-toxic</option>
                </select>
            </>
        );
    }
}

