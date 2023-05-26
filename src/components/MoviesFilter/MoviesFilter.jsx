import React from 'react';
import css from './MoviesFilter.module.css';

const GENRES = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

const MoviesFilter = ({ onClick }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  return (
    <ul className={css.filterGrid}>
      {GENRES.map((element, index) => {
        return (
          <li key={index}>
            <button
              className={css.filterItem}
              style={{ backgroundColor: getRandomHexColor() }}
              type="button"
              name={element.name}
              value={element.id}
              onClick={onClick}
            >
              {element.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesFilter;
