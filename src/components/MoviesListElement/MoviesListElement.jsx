import React from 'react';
import { Link } from '../SharedLayout/SharedLayout.styled';
import { MovieLi } from './MoviesListElement.styled';
import css from './MoviesListElement.module.css';
import placeholderBackdrop from '../../images/placeholderBackdrop.jpg';

const MoviesListElement = ({
  movieId,
  movieTitle,
  movieBackdrop,
  to,
  from,
}) => {
  const placeholder = !movieBackdrop.includes(null)
    ? movieBackdrop
    : placeholderBackdrop;
  return (
    <MovieLi key={movieId}>
      <div style={{ borderRadius: '8px' }} target="boxShadowDark">
        <Link className={css.thumb} to={`${to}`} state={{ from: from }}>
          <img className={css.backdrop} src={placeholder} alt={movieTitle} />
          <p className={css.label}>{movieTitle}</p>
        </Link>
      </div>
    </MovieLi>
  );
};

export default MoviesListElement;
