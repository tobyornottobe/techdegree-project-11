import React from 'react';
import Photo from './Photo';
import NotFound from '../NotFound';



const PhotoContainer = (props) => {

//searching for the images on flickr and if not found, display NotFound component
  const results = props.data;
    let images;
    if (results.length > 0) {
      images = results.map(photo =>

        <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} title={photo.title} />
      );
    } else {
      images = <NotFound />
    }

 return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>

        {images}

      </ul>
    </div>
  );
};


export default PhotoContainer;
