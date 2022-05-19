import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './screens/Home';

export const ROUTES = {
  HOME: '/',
  ABOUT: 'about'
}

export default function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
