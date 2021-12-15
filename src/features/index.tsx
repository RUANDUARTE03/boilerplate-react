import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<h1>PATH1</h1>} />
        <Route path={'/test'} element={<h1>PATH2</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
