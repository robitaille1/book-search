import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: [],
      filter: 'All'
    };
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleFilter = (event) => {
    console.log(event.target.value)
    // this.setState({
    //   filter: 'event.target.value'
    // })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBg_1nbXphFnxY2TuATfVHp3JQaXHaKM3Q&q=${this.state.query}` 
    fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong, please try again.')
      }
      return response;
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        books: data.items
      })
      // console.log(this.state.books.items[0].volumeInfo.title)
    })
    .catch(err => {
      this.setState({
        error: err.message
      })
    })
  };

  render() {
    return (
      <main className='App'>
        <Header
          change={this.handleChange}
          submit={this.handleSubmit}
          filterItems={this.handleFilter}/>
        <ResultsList books={this.state.books}/>
      </main>
    );
  }
}

export default App;
