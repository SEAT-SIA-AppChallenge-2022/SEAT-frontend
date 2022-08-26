import React from 'react';

import { IonGrid, IonRow } from '@ionic/react';
import LoadingIcon from './Rhombus.gif';

type Props = {
  loadingMessage?: string;
  isLoading: boolean;
};

const Loading = ({ loadingMessage = 'Loading...', isLoading }: Props) => {
  return isLoading ? (
    <div className='bg-[#ffffff] fixed h-screen w-screen flex items-center justify-center z-50'>
      <IonGrid>
        <IonRow className='justify-center'>
          <img src={LoadingIcon} />
        </IonRow>
        <IonRow className='justify-center pt-4'>
          <h1 className='text-black'>{loadingMessage}</h1>
        </IonRow>
      </IonGrid>
    </div>
  ) : (
    <></>
  );
};

export default Loading;
