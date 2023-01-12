import { useEffect, useState } from 'react';
import { getFilmById } from '../../service/request';
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
      <Link
        to={location.state.from}
        className={css`
          padding: 15px;
          width: 10%;
          background-color: brown;
          font-size: 24px;
          color: bisque;
          border-radius: 10px;
          border-color: brown;
        `}
      >
        Go back
      </Link>
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
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
                width: 45%;
                padding: 20px;
                color: brown;
                font-size: 28px;
                font-weight: 600;
              `}
            >
              <p>{filmById.title || filmById.name}</p>
              <span>
                {parseInt(filmById.release_date || filmById.first_air_date)}
              </span>
              <p>Rating: {filmById.vote_average.toFixed(1)}</p>
              <p
                className={css`
                  text-align: start;
                `}
              >
                Overview: {filmById.overview}
              </p>
              <p>Genres: {getGenresFilm(filmById.genres)}</p>
            </div>
          </>
        )}
      </div>
      <div
        className={css`
          display: flex;
          gap: 30px;
          justify-content: start;
        `}
      >
        <Link
          to="cast"
          state={{ from: { ...location.state.from } }}
          className={css`
            padding: 15px;
            width: 10%;
            background-color: brown;
            font-size: 24px;
            color: bisque;
            border-radius: 10px;
            border-color: brown;
          `}
        >
          Cast
        </Link>
        <Link
          to="reviews"
          state={{ from: { ...location.state.from } }}
          className={css`
            padding: 15px;
            width: 10%;
            background-color: brown;
            font-size: 24px;
            color: bisque;
            border-radius: 10px;
            border-color: brown;
          `}
        >
          Reviews
        </Link>
      </div>

      <Outlet />
    </>
  );
};

export default MoviesInfo;
