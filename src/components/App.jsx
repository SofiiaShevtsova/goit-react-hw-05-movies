import { Link, Outlet, Route, Routes, Navigate } from 'react-router-dom';
import { css } from '@emotion/css';
import { lazy, Suspense } from 'react';

import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const HomeLazy = lazy(() => import('page/Home/Home'));
const MoviesInfoLazy = lazy(() => import('page/MoviesInfo/MoviesInfo'));
const MoviesLazy = lazy(() => import('page/Movies/Movies'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
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
          <Route index element={<HomeLazy />} />
          <Route path="/movies/:movieId" element={<MoviesInfoLazy />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies" element={<MoviesLazy />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
