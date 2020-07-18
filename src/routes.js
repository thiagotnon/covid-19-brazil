import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Main from'./pages/main';
import UF from'./pages/uf';
import Countries from'./pages/countries';

const Routes = () => (
  <BrowserRouter>
      <Header />
    <Switch>
      <Route exact path={'/'} component={Main} />
      <Route exact path={'/brazil/uf/:uf'} component={UF} />
      <Route exact path={'/countries'} component={Countries} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;