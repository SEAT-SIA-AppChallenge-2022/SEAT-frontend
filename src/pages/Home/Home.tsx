import React from 'react';

import { IonCard, IonCardSubtitle, IonButton, IonIcon } from '@ionic/react';

import PageWithHeader from '@components/PageWithHeader';
import BackgroundBlur from '@components/BackgroundBlur';
import BackgroundImg from '@components/BackgroundImg';

import rightCaret from '@/assets/icons/right-arrow-icon.svg';
import dollarIcon from '@/assets/icons/dollar-icon.svg';
import cartIcon from '@/assets/icons/cart-icon.svg';
import shopIcon from '@/assets/icons/shop-icon.svg';

import lobster from '@/assets/imgs/lobster.jpeg';

const Home: React.FC = () => {
  return (
    <PageWithHeader>
      <BackgroundBlur />
      <BackgroundImg />
      <div className='grid grid-cols-5 sticky top-0 h-16 bg-white z-30 drop-shadow-md'>
        <div className='flex justify-center items-center'>
          <IonIcon className='w-6 h-6' icon={cartIcon} />
        </div>
        <div className='flex justify-center items-center'>
          <IonIcon className='w-6 h-6' icon={rightCaret} />
        </div>
        <div className='flex justify-center items-center'>
          <IonIcon className='w-6 h-6' icon={shopIcon} />
        </div>
        <div className='flex justify-center items-center'>
          <IonIcon className='w-6 h-6' icon={rightCaret} />
        </div>
        <div className='flex justify-center items-center'>
          <IonIcon className='w-6 h-6' icon={dollarIcon} />
        </div>
      </div>
      <div className='grid grid-cols-1 h-full w-screen'>
        <div className='z-20'>
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
