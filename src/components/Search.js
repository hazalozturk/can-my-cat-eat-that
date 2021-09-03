import React from 'react';
import Autosuggest from 'react-autosuggest';
import Fuse from 'fuse.js';
import inventory from "../plants.json";


const getSuggestions = value => {
    let options = {
        id: "names.common",
        threshold: 0.3,
        location: 0,
        distance: 100,
        maxPatternLength: 10,
        minMatchCharLength: 1,
        keys: ['names.common', 'names.scientific']
    };
    const fuse = new Fuse(inventory.plants, options);
    return fuse.search(value);
};

const getSuggestionValue = suggestion => suggestion.item.names.common;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.item.names.common}
    </div>
);

export default class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: ' Spider plant, fiddle leaf fig, etc...',
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}