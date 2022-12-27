import { Link, Outlet, Route, Routes, Navigate } from 'react-router-dom';
import { css } from '@emotion/css';

import Home from 'page/Home/Home';
import MoviesInfo from 'page/MoviesInfo/MoviesInfo';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Movies from 'page/Movies/Movies';

const LinkStyle = `padding: 10px;
width: 15%;
text-decoration: none;
font-size: 20px;
font-weight: 700;
border: 2px solid brown;
border-radius: 10px;
color: brown;
&:hover{
background-color: rgb(150, 50, 50);
color: rgb(255, 255, 255)}`;

const Loyout = () => {
  return (
    <>
      <nav
        className={css`
          display: flex;
          justify-content: center;
          padding: 20px 50px;
          gap: 100px;
        `}
      >
        <Link
          to="/"
          className={css`
            ${LinkStyle}
          `}
        >
          Home
        </Link>
        <Link
          to="/movies"
          className={css`
            ${LinkStyle}
          `}
        >
          Movies
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export const App = props => {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '40px',
        margin: '0 auto',
        width: '100%',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'rgba(52, 25, 5, 0.3)',
      }}
    >
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:movieId" element={<MoviesInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
