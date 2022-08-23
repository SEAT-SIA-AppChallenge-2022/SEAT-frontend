import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import ScootLogo from '@components/ScootLogo';

const AppToolbar = () => {
  return (
    <IonHeader>
      <IonToolbar color='primary' mode='ios' className='h-16 flex'>
        <ScootLogo className='ml-5' />
        <IonButtons slot='end'>
          <IonMenuButton className='mr-3' auto-hide='false' />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppToolbar;
