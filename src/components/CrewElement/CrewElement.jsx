import React from 'react';
import {
  Portrait,
  Role,
  CastGridItem,
} from '../CastElement/CastElement.styled';
import css from '../CastElement/CastElement.module.css'
import placeholderPortrait from '../../images/placeholderPortrait.jpg';

const CrewElement = ({ id, srcImg, name, department, job }) => {
  return (
    <CastGridItem>
      {!srcImg.includes(null) ? (
        <Portrait>
          <img src={srcImg} alt={`${name}'s portrait`} />
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
        <p>{name}</p>
        <p>{job}</p>
        <p>
          <b>{department}</b>
        </p>
      </Role>
    </CastGridItem>
  );
};
export default CrewElement;
