import React from 'react';
import '../styles/app.css';
import Layout from './Layout.js';
import Store from './Store.js';
import Cart from './Cart';
import Merchandize from './Merchandize';
import { ContextProvider } from '../context/Context.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App-root">
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Store/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/merchandize' element={<Merchandize/>}/>
          </Route>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
