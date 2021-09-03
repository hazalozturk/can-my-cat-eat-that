import React from 'react';
import Fuse from 'fuse.js';
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
        !value.target.value ? this.props.setInventory(this.props.inventory) : this.props.setInventory(results);
    };

    render() {
        return (
            <input
                type="text"
                placeholder="Spider plant, fiddle leaf fig, etc..."
                onChange={this.getSuggestions}
            />
        );
    }
}