import { useEffect, useState } from 'react';
import { getFilmById } from 'service/request';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { css } from '@emotion/css';

const getGenresFilm = genresName => {
  return genresName.length > 1
    ? `${genresName[0].name}, ${genresName[1].name} , Other`
    : `${genresName[0].name || 'Other'}`;
};

const MoviesInfo = () => {
  const { movieId } = useParams();
  const [filmById, setFilmById] = useState(null);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const filmById = await getFilmById(movieId);
      setFilmById(filmById);
    })();
  }, [movieId]);

  return (
    <>
      <Link to={location.state.from}>Go back</Link>
      <div
        className={css`
          display: flex;
          justify-content: center;
          gap: 10px;
          list-style: none;
        `}
      >
        {filmById && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500/${filmById.poster_path}`}
              alt={filmById.title || filmById.name}
              className={css`
                display: block;
                width: 45%;
              `}
            />
            <div
              className={css`
                display: block;
                width: 45%;
              `}
            >
              <p>{filmById.title || filmById.name} | </p>
              <span>
                {parseInt(filmById.release_date || filmById.first_air_date)}
              </span>
              <p> Rating: {filmById.vote_average.toFixed(1)}</p>
              <p> Overview: {filmById.overview}</p>
              <p> Genres: {getGenresFilm(filmById.genres)}</p>
            </div>
          </>
        )}
      </div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};

export default MoviesInfo;
