import axios from 'axios';
import apiKey from './config';


export async function GetImages(query){
  return axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
    .then(response => {
        return response.data.photos.photo
     }).catch(error => {
    console.log("Error fetching Flickr data", error);
  });
  }
