import { Link, Outlet, Route, Routes, Navigate } from 'react-router-dom';

import Home from 'page/Home/Home';
import Movies from 'page/Movies/Movies';
import MoviesInfo from 'page/MoviesInfo/MoviesInfo';

const Loyout = () => {
  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/movies"> Movies </Link>
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
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '50px',
        margin: '0 auto',
        width: '500px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'rgba(152, 25, 25, 0.3)',
      }}
    >
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path=":movieId" element={<MoviesInfo />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
