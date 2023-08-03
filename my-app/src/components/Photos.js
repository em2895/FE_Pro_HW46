import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Photos() {
  const [photos, setPhotos] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const albumId = searchParams.get('albumId');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos', {
      params: { albumId }
    })
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [albumId]);

  return (
    <div>
      <h1>Photos from the album</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}> 
            <p>{photo.title}</p>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Photos;
