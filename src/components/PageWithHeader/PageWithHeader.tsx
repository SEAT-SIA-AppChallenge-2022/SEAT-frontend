import React from 'react';

import { IonPage, IonContent } from '@ionic/react';
import AppToolbar from '@components/AppToolbar';

type Props = {
  children: React.ReactNode;
};

const PageWithHeader = ({ children }: Props) => {
  return (
    <IonPage>
      <AppToolbar />
      <IonContent className='font-helvetica'>{children}</IonContent>
    </IonPage>
  );
};

export default PageWithHeader;
