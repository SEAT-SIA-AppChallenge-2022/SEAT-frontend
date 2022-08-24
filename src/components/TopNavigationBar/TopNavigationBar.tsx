import React from 'react';

import { IonIcon } from '@ionic/react';

import rightCaret from '@/assets/icons/right-arrow-icon.svg';
import dollarIcon from '@/assets/icons/dollar-icon.svg';
import cartIcon from '@/assets/icons/cart-icon.svg';
import shopIcon from '@/assets/icons/shop-icon.svg';

const TopNavigationBar = () => {
  return (
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
  );
};

export default TopNavigationBar;
