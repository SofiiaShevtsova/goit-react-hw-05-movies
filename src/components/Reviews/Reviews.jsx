import { getReviewsFilm } from 'service/request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
      const { movieId } = useParams();
  const [filmById, setFilmById] = useState(null);

  useEffect(() => {
    (async () => {
      const filmById = await getReviewsFilm(movieId);
      setFilmById(filmById);
    })();
  }, [movieId]);
  console.log(filmById);
    return(    <ul>
      {filmById && (filmById.results.map(elem => (
        <li key={elem.id}>
          <p>Author: {elem.author}</p>
          <p>{elem.content}</p>
        </li>
      )))}
    </ul>
)
}

export default Reviews