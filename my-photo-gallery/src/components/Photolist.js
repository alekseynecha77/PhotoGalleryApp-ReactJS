import React from 'react';
import Photo from './Photo';

const Photolist = props => { 
  const results = props.data;
  let photos = results.map(photo=>
    <Photo url={photo.images.fixed_height.url} key={photo.id} />
    );
  return(
    <ul className="photo-list">
     {photos}
    </ul> 
  );
}

export default Photolist;