import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          query: ''
        };
      }
    handleSearch = event => {
        this.setState({query: event.target.value})
    } 
    render() {
        return (
            <div className='searchClass'>
                <form onSubmit={this.props.submit}>
                    <label htmlFor='search'>Search: </label>
                    <input 
                        name='search' 
                        type='text' 
                        placeholder='Henry' 
                        onChange={this.props.change}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;