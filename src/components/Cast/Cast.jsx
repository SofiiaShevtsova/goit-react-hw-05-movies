import { getCastByFilm } from 'service/request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [filmById, setFilmById] = useState(null);

  useEffect(() => {
    (async () => {
      const filmById = await getCastByFilm(movieId);
      setFilmById(filmById);
    })();
  }, [movieId]);
  console.log(filmById);
  return (
    <ul>
      {filmById && (filmById.cast.map(elem => (
        <li key={elem.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${elem.profile_path}`} alt={elem.original_name} />
          <p>{elem.original_name}</p>
          <p>Character: {elem.character}</p>
        </li>
      )))}
    </ul>
  );
};

export default Cast;
