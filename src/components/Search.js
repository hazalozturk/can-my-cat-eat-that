import React from 'react';
import Fuse from 'fuse.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class Search extends React.Component {
    getSuggestions = value => {
        let options = {
            id: "names.common",
            threshold: 0.3,
            location: 0,
            distance: 100,
            maxPatternLength: 10,
            minMatchCharLength: 1,
            keys: ['names.common', 'names.scientific']
        };
        const fuse = new Fuse(this.props.inventory, options);

        let results = fuse.search(value.target.value).map(result => result.item);
        if (!value.target.value) {
            this.props.setInventory(this.props.inventory);
            this.props.setSearchText("");
        } else {
            this.props.setInventory(results);
            this.props.setSearchText(value.target.value);
        }
    };

    render() {
        return (
            <div className="search-input-wrapper">
                <FontAwesomeIcon icon={faSearch} size="lg" className="search-input-icon" />
                <label id="searchLabel" htmlFor="search" className="sr-only">Search</label>
                <input
                    id="search" aria-labelledby="searchLabel"
                    className="search-input"
                    type="text"
                    placeholder="Spider plant, fiddle leaf fig, etc..."
                    onChange={this.getSuggestions}
                />
            </div>
        );
    }
}