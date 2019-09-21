import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import FilterBar from '../FilterBar/FilterBar'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Google Book Search</h1>
                <SearchBar 
                    search={this.props.search}
                    change={this.props.change}
                    submit={this.props.submit} />
                <FilterBar 
                    filterItems={this.props.filterItems}
                />
            </header>
        )
    }
}

export default Header;