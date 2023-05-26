import React from 'react';
import {
  Portrait,
  Role,
  CastGridItem,
} from '../CastElement/CastElement.styled';
import css from '../CastElement/CastElement.module.css'
import placeholderPortrait from '../../images/placeholderPortrait.jpg';

const SimilarElement = ({ id, srcImg, title, releaseDate }) => {
  return (
    <CastGridItem key={id}>
      {!srcImg.includes(null) ? (
        <Portrait>
          <img src={srcImg} alt={`${title} - this movie's poster`} />
        </Portrait>
      ) : (
        <div className={css.thumb}>
          <img
            className={css.image}
            src={placeholderPortrait}
            alt="placeholder"
          />
          <p className={css.label}>No image yet</p>
        </div>
      )}
      <Role>
        <p>
          <b>{title}</b>
        </p>
        <p>{releaseDate}</p>
      </Role>
    </CastGridItem>
  );
};
export default SimilarElement;
