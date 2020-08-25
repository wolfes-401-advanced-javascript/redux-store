import React from 'react';
import Header from './components/layout/header.js';
import Footer from './components/layout/footer';
import Categories from './components/categories.js';
import Products from './components/layout/products.js';

import { Provider } from 'react-redux';

import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Route exact path="/">
          <Categories />
          <Products />
        </Route>
      </Provider>
    </BrowserRouter>
    </>
  );
};

export default App;