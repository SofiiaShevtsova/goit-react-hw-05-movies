import { useEffect, useState } from 'react';
import MoviesForHome from '../../components/MoviesForHome/MoviesForHome';
import { getPopularFilms } from '../../service/request';
import { css } from '@emotion/css';

const Home = () => {
  const [popularFilms, setPopularFilms] = useState(null);

  useEffect(() => {
    (async () => {
      const popularListFilms = await getPopularFilms();
      setPopularFilms(popularListFilms);
    })();
  }, []);

  return (
    <>
      <h2
        className={css`
          font-size: 24px;
          color: rgb(211, 66, 8);
        `}
      >
        Trending today
      </h2>
      {popularFilms && (
        <ul
          className={css`
            display: flex;
            justify-content: center;
            align-items: stretch;
            flex-wrap: wrap;
            gap: 10px;
            list-style: none;
          `}
        >
          {popularFilms.map(elem => {
            return <MoviesForHome elem={elem} key={elem.id} />;
          })}
        </ul>
      )}
    </>
  );
};

export default Home;
