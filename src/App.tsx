import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import './app.css';
import Home from './pages/Home';

const App: React.FC = (): ReactElement => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
};

export default App;
