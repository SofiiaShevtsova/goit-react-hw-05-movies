import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {getPopularFilms} from 'service/request'

const Home = () => {
    const [popularFilms, setPopularFilms] = useState(null)

    useEffect(() => {
        (async () => {
            const popularListFilms = (await getPopularFilms())
            setPopularFilms(popularListFilms);
        })() 
    }, [])

    return (
        <>
            {popularFilms && (<ul>
                {popularFilms.map(elem => {
                    return (<li key={elem.id}><Link to={`${elem.id}`}>{elem.title||elem.name}</Link></li>)
                })}
            </ul>)}
            
        </>
    )
}

export default Home