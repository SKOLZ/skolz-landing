import { Routes, Route } from 'react-router-dom';
import { RefObject } from 'react';

import Home from 'src/App/screens/Home';
import About from 'src/App/screens/About';

export const ROUTES = {
  HOME: '/',
  ABOUT: 'about'
}

type RouterProps = {
  logoRef: RefObject<HTMLAnchorElement>
};

export default function Router ({ logoRef }: RouterProps) {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home logoRef={logoRef} />} />
      <Route path={ROUTES.ABOUT} element={<About logoRef={logoRef} />} />
    </Routes>
  );
}
