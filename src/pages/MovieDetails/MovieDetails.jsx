import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { Link } from '../../components/SharedLayout/SharedLayout.styled';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetails.module.css';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import MovieDetailsAdditionalInfo from 'components/MovieDetailsAdditionalInfo/MovieDetailsAdditionalInfo';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getDetails = async () => {
      const response = await getMovieDetails(id);
      if (response !== null) {
        setMovieDetails(response);
      } else {
        setMovieDetails('');
      }
    };
    getDetails();
  }, [id]);

  return (
    <main>
      <Link className={[css.movie__link]} to={backLinkHref}>
        &#10094; Go back
      </Link>
      {!!movieDetails && (
        <>
          <MovieDetailsCard
            posterPath={movieDetails.posterPath}
            title={movieDetails.title}
            releaseDate={movieDetails.releaseDate}
            voteAverage={movieDetails.voteAverage}
            voteCount={movieDetails.voteCount}
            tagline={movieDetails.tagline}
            overview={movieDetails.overview}
            genres={movieDetails.genres}
            homepage={movieDetails.homepage}
          />
          <MovieDetailsAdditionalInfo
            fromLocation={{ from: location.state.from }} />
          
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
