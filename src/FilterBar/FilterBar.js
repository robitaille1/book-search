import React, { Component } from 'react';
import './FilterBar.css'

class FilterBar extends Component {
    render() {
        return (
            <div className='FilterClass'>
                <form className='PrintTypeClass'>
                    <label htmlFor="PrintType" className='label'>Print Type: </label>
                     <select id="PrintType" name="PrintType">
                         <option 
                            onClick={this.props.filterItems} value="All">All</option>
                         <option 
                            onClick={this.props.filterItems}
                            value="BOOK">Book</option>
                         <option
                            onClick={this.props.filterItems} 
                            value="MAGAZINE">Magazine</option>
                    </select>
                </form>
                <form className='BookTypeClass'>
                    <label htmlFor="BookType" className='label'>Book Type: </label>
                     <select id="bookType" name="type">
                         <option value="No Filter">No Filter</option>
                         <option value="None">Another Option</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default FilterBar;