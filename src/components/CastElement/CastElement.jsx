import React from 'react';
import {
  Portrait,
  Role,
  CastGridItem,
} from './CastElement.styled';
import css from './CastElement.module.css'
import placeholderPortrait from '../../images/placeholderPortrait.jpg';

const CastElement = ({ id, srcImg, name, character }) => {
  //const placeholder = !srcImg.includes(null) ? srcImg : placeholderPortrait;
  return (
    <CastGridItem key={id}>
      {!srcImg.includes(null) ? (
        <Portrait>
          <img src={srcImg} alt={`${name}'s portrait`} />
        </Portrait>
      ) : (
        <div className={css.thumb}>
          <img className={css.image} src={placeholderPortrait} alt="placeholder" />
          <p className={css.label}>No image yet</p>
        </div>
      )}
      <Role>
        <p>{name}</p>
        <p>as:</p>
        <p>{character}</p>
      </Role>
    </CastGridItem>
  );
};
export default CastElement;
