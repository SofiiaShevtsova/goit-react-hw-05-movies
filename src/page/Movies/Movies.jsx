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
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Movie search" />
          <button type="submit">Search</button>
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
