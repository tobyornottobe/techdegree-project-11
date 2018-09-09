import React, { Component } from 'react';
import Header from './Header'
import PhotoContainer from './photos/PhotoContainer';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      photos: []
    }
    this.loadPhotos = this.loadPhotos.bind(this);
  }

  // function to get data from one container to another
  loadPhotos(loading,photos,searchTopic){
    this.setState({
      loading : loading,
      photos : photos,
      searchTopic:searchTopic
    })
  }

  // renders only Header and PhotoContainer
  render() {
    return (
      <div className="container" >
        <Header loadPhotos = {this.loadPhotos} query={this.props.query} />
        <div>
          <h2>{this.state.searchTopic} Images</h2>
          {
            (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoContainer data={this.state.photos} />
          }
        </div>
      </div>
    )
  };
}

export default Container;
