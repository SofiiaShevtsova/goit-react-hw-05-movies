import { useEffect, useState } from 'react'
import { getFilmById } from 'service/request'
import { useParams } from 'react-router-dom'

const MoviesInfo = () => {
            const {movieId} = useParams()
    const [filmById, setFilmById] = useState(null)
    
    useEffect(() => {
    (async () => {
            const filmById = (await getFilmById(movieId))
            setFilmById(filmById);
        })() 
}, [movieId])

    return (
        <div>
            {filmById && (<><img
          src={`https://image.tmdb.org/t/p/w500/${filmById.poster_path}`}
          alt={filmById.title || filmById.name}/>
        <div>
          <p>{
            filmById.title || filmById.name
          }</p>
          <p>
            {/* <span>{
              this.getGenresFilm() || `Other`
            }</span> */}
            <span>{parseInt(
              filmById.release_date || filmById.first_air_date
            )}</span>
                        <span>{filmById.vote_average.toFixed(
                          1
                        )}</span>
          </p>
        </div></>)}
        </div>
    )
}

export default MoviesInfo