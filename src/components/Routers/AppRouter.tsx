import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Routes from '@/utilities/routes';
import { useSelector } from 'react-redux';

import Start from '@pages/Start';
import AddOns from '@pages/AddOns';
import Overview from '@pages/Overview';
import Purchase from '@pages/Purchase';
import Review from '@pages/Review';

import { getCurrentUser } from '@/store/authentication/authSlice';

const AppRouter = () => {
  const currentUser = useSelector(getCurrentUser);

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          <Route exact path={Routes.base}>
            <Redirect to={Routes.start} />
          </Route>
          <Route exact path={Routes.start} component={Start} />
          <Route exact path={Routes.addOns} component={AddOns} />

          {currentUser && (
            <>
              <Route exact path={Routes.overview} component={Overview} />
              <Route exact path={Routes.purchase} component={Purchase} />
              <Route exact path={Routes.review} component={Review} />
            </>
          )}
          <Route exact path='*'>
            <Redirect to={Routes.base} />
          </Route>
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRouter;
