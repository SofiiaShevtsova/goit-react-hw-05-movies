import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

const Movies = ({ elem }) => {
  return (
    <>
      <li
        key={elem.id}
        className={css`
          width: 10%;
        `}
      >
        <Link
          to={`${elem.id}`}
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

export default Movies;
