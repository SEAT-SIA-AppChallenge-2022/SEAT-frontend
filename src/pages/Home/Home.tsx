import React from 'react';

import { IonCard, IonCardSubtitle, IonButton } from '@ionic/react';

import PageWithHeader from '@components/PageWithHeader';
import BackgroundBlur from '@components/BackgroundBlur';
import BackgroundImg from '@components/BackgroundImg';
import OptionsDropdown from '@/components/OptionsDropdown';
import TopNavigationBar from '@components/TopNavigationBar';

import lobster from '@/assets/imgs/lobster.jpeg';

const Home: React.FC = () => {
  return (
    <PageWithHeader>
      <BackgroundBlur />
      <BackgroundImg />

      <TopNavigationBar />

      <div className='grid grid-cols-1 h-full w-screen'>
        <div className='z-20'>
          <div className='w-full px-10 pt-5'>
            <h1 className='font-bold text-3xl'>Escape the Ordinary</h1>
            <p className='text-base'>Recommendations curated for you</p>

            <OptionsDropdown className='mt-8' />
          </div>

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
        </div>
      </div>
    </PageWithHeader>
  );
};

export default Home;
