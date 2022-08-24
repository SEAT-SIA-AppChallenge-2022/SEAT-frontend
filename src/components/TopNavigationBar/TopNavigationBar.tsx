import React from 'react';

import { IonIcon } from '@ionic/react';

import rightCaret from '@/assets/icons/right-arrow-icon.svg';

type IconState = {
  icon1: string;
  icon2: string;
  icon3: string;
};

export type NavigationState = {
  pickAttractions: IconState;
  reviewCart: IconState;
  completePayment: IconState;
};

type Props = {
  state: IconState;
};

const TopNavigationBar = ({ state }: Props) => {
  return (
    <div className='grid grid-cols-5 sticky top-0 h-16 bg-white z-30 drop-shadow-md'>
      <div className='flex justify-center items-center'>
        <IonIcon className='w-6 h-6 cursor-pointer' icon={state.icon1} />
      </div>
      <div className='flex justify-center items-center'>
        <IonIcon className='w-6 h-6' icon={rightCaret} />
      </div>
      <div className='flex justify-center items-center'>
        <IonIcon className='w-6 h-6 cursor-pointer' icon={state.icon2} />
      </div>
      <div className='flex justify-center items-center'>
        <IonIcon className='w-6 h-6' icon={rightCaret} />
      </div>
      <div className='flex justify-center items-center'>
        <IonIcon className='w-6 h-6 cursor-pointer' icon={state.icon3} />
      </div>
    </div>
  );
};

export default TopNavigationBar;
