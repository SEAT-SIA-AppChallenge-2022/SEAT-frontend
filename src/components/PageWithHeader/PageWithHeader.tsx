import React from 'react';

import AppToolbar from '@components/AppToolbar';
import BackgroundBlur from '@components/BackgroundBlur';
import BackgroundImg from '@components/BackgroundImg';
// import ViewAttractionModal from '@components/ViewAttractionModal';

import { IonPage, IonContent } from '@ionic/react';

type Props = {
  children: React.ReactNode;
};

const PageWithHeader = ({ children }: Props) => {
  return (
    <IonPage>
      {/* <ViewAttractionModal /> */}
      <AppToolbar />
      <IonContent className='font-helvetica'>
        <BackgroundBlur />
        <BackgroundImg />
        {children}
      </IonContent>
    </IonPage>
  );
};

export default PageWithHeader;
