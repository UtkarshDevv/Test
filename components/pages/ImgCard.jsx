import React from 'react'
import "..pages/../CSS/ImgCard.css"
import ImageSlider from '../ImagesSlider';

function ImgCard({ images }) {
  return (
    <div className='imgcard'>
      <ImageSlider images={images} />
    </div>
  );
}

export default ImgCard;