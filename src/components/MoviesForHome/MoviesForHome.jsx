import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/css';

const MoviesForHome = ({ elem }) => {
  const location = useLocation();

  return (
    <>
      <li
        className={css`
          width: 10%;
        `}
        key={elem.id}
      >
        <Link
          to={`/movies/${elem.id}`}
          state={{ from: location }}
          className={css`
            color: inherit;
            text-decoration: none;
          `}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
            alt={elem.title || elem.name}
            className={css`
              width: 50px;
              height: 75px;
              margin: 0 auto;
            `}
          />
          <p>{elem.title || elem.name}</p>
        </Link>
      </li>
    </>
  );
};

export default MoviesForHome;
