import axios from 'axios';

export const API_KEY = '7e626872ba2c457d969115031d94d6fb';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const PAGE = 1;

// This is tha main fetch fuction
const fetchTMDB = async (urlPath, myParams) => {
  return axios
    .get(BASE_URL + urlPath, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
        ...myParams,
      },
    })
    .then(response => {
      console.log('FULL Response:', response);
      console.log('API KEY:', process.env.REACT_APP_AUTH_TOKEN);
      return response;
    })
    .catch(error => {
      console.log('error', error);
    });
};

const getTrendingMovies = async () => {
  const response = await fetchTMDB('/trending/movie/day');
  if (response === null) {
    return null;
  }
  let movies = [];
  handleMoviesData(response.data.results, movies);
  console.log('Trending', response);
  return movies;
};

const handleMoviesData = (response, movies) => {
  response.forEach(movie => {
    return movies.push({
      movieId: movie.id,
      movieTitle: movie.title,
      movieBackdrop: 'https://image.tmdb.org/t/p/w200' + movie.backdrop_path,
    });
  });
};

const getQueryMovies = async query => {
  const myParams = {
    query: query,
    page: 1,
  };
  const response = await fetchTMDB('/search/movie', myParams);
  if (response === null) {
    return null;
  }
  let movies = [];
  handleMoviesData(response.data.results, movies);
  return movies;
};

const getMovieDetails = async id => {
  const response = await fetchTMDB(`/movie/${id}`);
  if (response === null) {
    return null;
  }
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    vote_count,
    overview,
    genres,
    homepage,
    tagline,
  } = response.data;
  const movieDetails = {
    posterPath: 'https://image.tmdb.org/t/p/w300' + poster_path,
    title,
    releaseDate: `${new Date(release_date).getFullYear()}`,
    voteAverage: vote_average,
    voteCount: vote_count,
    overview,
    genres,
    homepage,
    tagline,
  };
  console.log('details', response);
  return movieDetails;
};

const getMovieCast = async id => {
  const response = await fetchTMDB(`/movie/${id}/credits`);
  if (response === null) {
    return null;
  }
  let cast = [];
  console.log('CAST', response);
  response.data.cast.forEach(element => {
    const { id, profile_path, name, character } = element;
    return cast.push({
      id,
      srcImg: 'https://image.tmdb.org/t/p/w200' + profile_path,
      name,
      character,
    });
  });
  return cast;
};

const getMovieCrew = async id => {
  const response = await fetchTMDB(`/movie/${id}/credits`);
  if (response === null) {
    return null;
  }
  let crew = [];
  console.log('Crew', response);
  response.data.crew.forEach(element => {
    const { id, profile_path, name, department, job } = element;
    return crew.push({
      id,
      srcImg: 'https://image.tmdb.org/t/p/w200' + profile_path,
      name,
      department,
      job,
    });
  });
  return crew;
};

const getMovieReviews = async id => {
  const response = await fetchTMDB(`/movie/${id}/reviews`);
  if (response === null) {
    return null;
  }
  let reviews = [];
  response.data.results.forEach(element => {
    const { id, author, content } = element;
    return reviews.push({ id, author, content });
  });
  return reviews;
};

const getMovieSimilar = async id => {
  const response = await fetchTMDB(`/movie/${id}/similar`);
  if (response === null) {
    return null;
  }
  let similar = [];
  console.log('SIMILAR', response);
  response.data.results.forEach(element => {
    const { id, poster_path, title, release_date } = element;
    return similar.push({
      id,
      srcImg: 'https://image.tmdb.org/t/p/w200' + poster_path,
      title,
      releaseDate: `${new Date(release_date).getFullYear()}`,
    });
  });
  return similar;
};

const getTheBestOfGenre = async (genre) => {
  const response = await fetchTMDB(
    `/discover/movie?with_genres=${genre}&sort_by=vote_average.desc&vote_count.gte=10`
  );
  if (response === null) {
    return null;
  }
  console.log('BEST res', response)
  let movies = [];
  handleMoviesData(response.data.results, movies);
  return movies;
};

const getMoviesWithCast = async (castId) => {
  const response = await fetchTMDB(
    `/discover/movie?with_people=${castId}&sort_by=vote_average.desc`
  );
  if (response === null) {
    return null;
  }
  console.log('Cast - movies res', response)
  let movies = [];
  handleMoviesData(response.data.results, movies);
  return movies;
};


export {
  getTrendingMovies,
  getQueryMovies,
  getMovieDetails,
  getMovieCast,
  getMovieCrew,
  getMovieReviews,
  getMovieSimilar,
  getTheBestOfGenre,
  getMoviesWithCast,
};
