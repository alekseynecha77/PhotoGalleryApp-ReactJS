import React from 'react';
import Photo from './Photo';

const Photolist = props => { 
  
  return(
    <ul className="photo-list">
      <Photo />
    </ul> 
  );
}

export default Photolist;