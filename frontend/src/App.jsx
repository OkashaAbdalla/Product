 import {Button} from '@radix-ui/themes'
 import React from 'react'
import NavBar from './assets/components/NavBar'
import { Route, Routes } from 'react-router-dom'
import CreatePage from './assets/pages/CreatePage';
import HomePage from './assets/pages/HomePage';

function App() {


  return (
    <>
    {/* Fist we need a navbar component which is static across all pages */}
    <NavBar />
    <Routes>
      {/* Define your routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/create-product" element={<CreatePage />} />
    </Routes>
    </>
  );
}

export default App
