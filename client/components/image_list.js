import React, { Component } from 'react';
import ImageDetail from './image_detail';



const ImageList = (props) => {

  const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map((image, i) =>
    <ImageDetail image={image} key={i} /> // in ES6 if only 1 element, eg ImageDetail, no need for 'return'
  );

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
}


export default ImageList;
