import { useState, useEffect } from 'react';
import { getFilmFromInput } from 'service/request';
import { css } from '@emotion/css';
import MoviesForHome from 'components/MoviesForHome/MoviesForHome';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [listForMovies, setListForMovies] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    (async () => {
      const listFilms = await getFilmFromInput(query);
      setListForMovies(listFilms);
    })();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
    e.target.reset();
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className={css`
            display: flex;
            gap: 20px;
            justify-content: center;
          `}
        >
          <input
            type="text"
            placeholder="Movie search"
            className={css`
              padding: 15px;
              width: 30%;
              background-color: bisque;
              font-size: 24px;
              color: brown;
              border-radius: 10px;
              border-color: brown;
            `}
          />
          <button
            type="submit"
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
            Search
          </button>
        </form>
      </div>
      {listForMovies && (
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
          {listForMovies.results.map(elem => {
            return <MoviesForHome elem={elem} key={elem.id} />;
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
