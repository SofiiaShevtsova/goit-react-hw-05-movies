import { getReviewsFilm } from '../../service/request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/css';

const Reviews = () => {
  const { movieId } = useParams();
  const [filmById, setFilmById] = useState(null);

  useEffect(() => {
    (async () => {
      const filmById = await getReviewsFilm(movieId);
      setFilmById(filmById);
    })();
  }, [movieId]);

  return (
    <ul
      className={css`
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: inherit;
        font-size: 24px;
      `}
    >
      {filmById &&
        filmById.results.map(elem => (
          <li
            key={elem.id}
            className={css`
              color: brown;
              font-size: 24px;
              text-align: start;
            `}
          >
            <p
              className={css`
                margin-bottom: 10px;
                font-weight: 600;
              `}
            >
              Author: {elem.author}
            </p>
            <p>{elem.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
