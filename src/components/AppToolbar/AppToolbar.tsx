import React from 'react';
import { IonHeader, IonToolbar } from '@ionic/react';
import ScootLogo from '@components/ScootLogo';

const AppToolbar = () => {
  return (
    <IonHeader>
      <IonToolbar color='primary' mode='ios' className='h-16 flex'>
        <ScootLogo className='ml-2' />
      </IonToolbar>
    </IonHeader>
  );
};

export default AppToolbar;
