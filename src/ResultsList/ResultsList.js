import React, { Component } from 'react';
import SearchItem from '../SearchItem/SearchItem'
import './ResultsList.css'

class ResultsList extends Component {
  render() {
    return (
      <div>
        <SearchItem 
          books={this.props.books} />
      </div>
    );
  }
}

export default ResultsList;