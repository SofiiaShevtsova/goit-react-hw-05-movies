import { getCastByFilm } from '../../service/request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/css';

const Cast = () => {
  const { movieId } = useParams();
  const [filmById, setFilmById] = useState(null);

  useEffect(() => {
    (async () => {
      const filmById = await getCastByFilm(movieId);
      setFilmById(filmById);
    })();
  }, [movieId]);

  return (
    <ul
      className={css`
        display: flex;
        flex-direction: column;
        gap: 20px;
      `}
    >
      {filmById &&
        filmById.cast.map(elem => (
          <li
            key={elem.id}
            className={css`
              display: flex;
              gap: 20px;
            `}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${elem.profile_path}`}
              alt={elem.original_name}
              className={css`
                max-height: 120px;
              `}
            />
            <div
              className={css`
                color: brown;
                font-size: 24px;
              `}
            >
              <p
                className={css`
                  margin-bottom: 10px;
                `}
              >
                {elem.original_name}
              </p>
              <p>Character: {elem.character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
