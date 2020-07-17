import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from'./pages/main';
import UF from'./pages/uf';
import Countries from'./pages/countries';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={Main} />
      <Route exact path={'/brazil/uf/:uf'} component={UF} />
      <Route exact path={'/countries'} component={Countries} />
    </Switch>
  </BrowserRouter>
);

export default Routes;