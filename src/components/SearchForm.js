import React, { Component } from 'react';
import { GetImages } from '../data/axios';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  // set state value of searchText with search text box
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });

  }

  // performs search on button click
  onSearchClick = e => {
    e.preventDefault();
    this.performSearch(this.state.searchText);
  }


  // fetch data from api and set state
  performSearch = (text = 'love') => {
    if(text === "") text = " ";
    this.props.loadPhotos(true,[],text);
    GetImages(text).then(response => {
      this.props.loadPhotos(false, response, text);
    })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  // search default images for initial load
  componentDidMount(){
    this.performSearch(this.props.query);
  }

  // updates search by clicking on button
  componentWillReceiveProps(nextProp) {
    if (this.props.query !== nextProp.query) {
      this.performSearch(nextProp.query);
    }
  }

  render() {
    return (
      <div>
        <form className="search-form">
          <input type="search" onChange={this.onSearchChange} id="search" name="search" ref={(input) => this.query = input} // Puts a reference into the input on the Search form class
            placeholder="Search" />
          <button type="submit" onClick={this.onSearchClick} className="search-button">
            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </form>

      </div>
    );
  }
};

export default SearchForm;
