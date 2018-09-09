import React, { Component } from 'react';

//App components

import SearchForm from './SearchForm'
import Navigation from './Navigation'

class Header extends Component {

  //renders search form and navigation buttons
  render() {
    return (
      <header>
        <SearchForm query={this.props.query} loadPhotos = {this.props.loadPhotos} />
        <Navigation />
      </header>
    );
  };
};

export default Header;
