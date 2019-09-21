import React, { Component } from 'react';
import './SearchItem.css'

class SearchItem extends Component {
  render() {
    const bookList = this.props.books.map((item, index) => {
      let { title, imageLinks, authors, printType, description} = item.volumeInfo;
      return (
        <div className='Result' type={printType} key={index}>
          { 
            imageLinks === undefined ? null : 
            <img
            src={imageLinks.thumbnail} 
            alt={`The cover for the book ${title}`}
            className='bookImage'/> 
          }
          <h3>{title}</h3>
          <h4>Author: {authors}</h4>
          <p>{description}</p>
        </div>
      )
    })
    return (
      <div>
        {bookList}
      </div>
    );
  }
}

export default SearchItem;