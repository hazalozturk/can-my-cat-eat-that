import React from 'react';

export default class ToxicityFilter extends React.Component {
    changeToxicity = (event) => {
        this.props.setToxicity(event.target.options[event.target.selectedIndex].value)
    }
    render() {
        return (
            <select name="toxicity" id="toxicity" onChange={this.changeToxicity} className="toxicity-filter-dropdown">
                <option value="All">All</option>
                <option value="Toxic">Toxic</option>
                <option value="Non-toxic">Non-toxic</option>
            </select>
        );
    }
}

