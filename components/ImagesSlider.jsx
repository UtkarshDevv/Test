
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './pages/CSS/ImageSlider.css';



function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [length]);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className="slider">
      <button className="left-arrow" onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}>&#10094;</button>
      <button className="right-arrow" onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}>&#10095;</button>
      <div className="slide-container">
        {images.map((item, index) => (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <>
                <img src={item.src} alt={`Slide ${index}`} className="image" />
                <div className="image-name">{item.name}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageSlider;
