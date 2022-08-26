import React from 'react';

import PageWithHeader from '@components/PageWithHeader';

import Routes from '@/utilities/routes';
import { TRIP_REF } from '@/constants/dummyData';

const Start = () => {
  return (
    <PageWithHeader>
      <div className='grid grid-cols-1 h-full w-screen'>
        <div className='z-20'>
          <div className='w-full px-10 pt-2'>
            <p className='text-base font-semibold'>Booking Ref: {TRIP_REF}</p>
            <h1 className='font-bold text-3xl'>Help us get to know you better</h1>
          </div>
        </div>
      </div>
    </PageWithHeader>
  );
};

export default Start;
