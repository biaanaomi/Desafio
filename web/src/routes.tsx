import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import FoodList from './pages/FoodList';
import FoodForm from './pages/FoodForm';

//caminhos para página principal, listagem e formulário de contato
function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} /> 
      <Route path="/search" component={FoodList} />
      <Route path="/register" component={FoodForm} />
    </BrowserRouter>
  );
}

export default Routes;