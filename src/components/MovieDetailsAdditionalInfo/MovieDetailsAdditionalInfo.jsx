import React from 'react';
import { Link } from '../SharedLayout/SharedLayout.styled';
import css from './MovieDetailsAdditionalInfo.module.css';

const MovieDetailsAdditionalInfo = ({ fromLocation }) => {
  const infoLinkNames = ['cast', 'reviews', 'crew', 'similar'];
  

  return (
    <div className={[css.movie__additions]}>
      <h5>Additional information</h5>
      <ul className={[css.additions__list]}>
        {infoLinkNames.map((element, index) => {
          return (
            <li key={index}>
              <Link
                className={[css.additions__item]}
                to={element}
                state={fromLocation}
              >
                &#10139; {element}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieDetailsAdditionalInfo;
