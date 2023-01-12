import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/css';
import PropTypes from 'prop-types';

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
            color: brown;
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
          <p
            className={css`
              font-size: 18px;
              margin-top: 10px;
            `}
          >
            {elem.title || elem.name}
          </p>
        </Link>
      </li>
    </>
  );
};

MoviesForHome.propTypes = {
  elem: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default MoviesForHome;
