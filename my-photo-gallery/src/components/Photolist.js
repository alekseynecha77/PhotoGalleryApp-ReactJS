import React from 'react';
import Photo from './Photo';

const Photolist = props => { 
  const results = props.data;
  let gifs = results.map(gif =>
    <Photo url={gif.images.fixed_height.url} key={gif.id} />
    );
  return(
    <ul className="photo-list">
     {gifs}
    </ul> 
  );
}

export default Photolist;