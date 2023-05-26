import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import MoviesListElement from 'components/MoviesListElement/MoviesListElement';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const locaction = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getTrendingMovies();
      if (response !== null) {
        setMovies(response);
      } else {
        setMovies([]);
      }
    };
    fetchMovies();
  }, []);
  return (
    <main>
      <MoviesList title="Trending today">
        {!!movies &&
          movies.map(({ movieId, movieTitle, movieBackdrop }) => (
            <MoviesListElement
              key={movieId}
              movieTitle={movieTitle}
              movieBackdrop={movieBackdrop}
              to={'movies/' + movieId}
              from={locaction}
              movieId={movieId}
            />
          ))}
      </MoviesList>
    </main>
  );
};

export default Home;
