import React from 'react';
import classes from './index.module.css';

export const ImagesGrid = ({ images, onClick }) => {
  return (
    <div className={classes.container}>
      {images.map((image) => (
        <div className={classes.imgBox} key={image.id}>
          <img src={image.url} alt={image.description} />
        </div>
      ))}
    </div>
  );
};
