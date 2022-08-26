import React from 'react';

import OptionsDropdown from '@components/OptionsDropdown';
import Option from '@components/OptionsDropdown/Option';

import { getIsLoginModalOpen, hideLoginModal } from '@/store/ui/uiSlice';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import ClickAwayListener from 'react-click-away-listener';
import { useSelector, useDispatch } from 'react-redux';

const LoginModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsLoginModalOpen);
  const handleClickAway = () => {
    dispatch(hideLoginModal());
  };
  return isOpen ? (
    <div className={`absolute flex justify-center items-center overflow-y-auto z-40 w-screen h-screen bg-[#000000b3]`}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <IonCard className='w-full relative z-50 overflow-y-hidden px-5 py-4'>
          <IonCardHeader>
            <IonCardTitle>
              Discounts. <br />
              Convenience. <br />
              At your fingertips.
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <OptionsDropdown className='mb-7' currentState='User 1'>
              <Option onClick={() => ''}>User 1</Option>
            </OptionsDropdown>
            <div className='mb-3'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <div className='mt-1'>
                <input
                  readOnly
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>

            <div className='mb-5'>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='mt-1'>
                <input
                  readOnly
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>

            <div className='flex items-center justify-between mb-5'>
              <div className='flex items-center'>
                <input
                  checked
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                  Remember me
                </label>
              </div>
            </div>

            <div className='mb-3'>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow focus:outline-none'
              >
                Sign in
              </button>
            </div>

            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#FFF7A6] focus:outline-none'
              >
                Continue as Guest
              </button>
            </div>
          </IonCardContent>
        </IonCard>
      </ClickAwayListener>
    </div>
  ) : (
    <></>
  );
};

export default LoginModal;
