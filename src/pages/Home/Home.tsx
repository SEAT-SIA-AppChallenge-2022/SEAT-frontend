import React from 'react';

import PageWithGrid from '@components/PageWithGrid';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import lobster from '@/assets/imgs/lobster.jpeg';

const Home: React.FC = () => {
  return (
    <PageWithGrid>
      <IonCard className='font-helvetica relative'>
        <img src={lobster} />
        <div className='absolute bg-transparentGrey bottom-0 py-3 px-8 w-full'>
          <IonCardSubtitle mode='md' className='text-white font-helvetica text-sm font-semibold'>
            Dining overlooking Syndney CBD: Infinity at Sydney Tower
          </IonCardSubtitle>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex items-center'>
              <p className='text-white font-helvetica font-semibold'>From SGD 13.50</p>
            </div>
            <div>
              <IonButton mode='ios' className='text-xs font-semibold w-full'>
                View
              </IonButton>
            </div>
          </div>
        </div>
      </IonCard>
    </PageWithGrid>
  );
};

export default Home;
