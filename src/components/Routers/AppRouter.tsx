import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Routes from '@/utilities/routes';

import AddOns from '@/pages/AddOns';

const AppRouter = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          <Route exact path={Routes.base}>
            <Redirect to={Routes.addOns} />
          </Route>
          <Route exact path={Routes.addOns} component={AddOns} />
          <Route exact path='*'>
            <Redirect to={Routes.base} />
          </Route>
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRouter;
