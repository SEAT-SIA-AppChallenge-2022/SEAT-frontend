import React from 'react';

import PageWithHeader from '@components/PageWithHeader';
import BackButton from '@/components/BackButton';
import Routes from '@/utilities/routes';
import { TRIP_REF } from '@/constants/dummyData';

const Overview = () => {
  return (
    <PageWithHeader>
      <div className='grid grid-cols-1 h-full w-screen'>
        <div className='z-20'>
          <BackButton className='pl-8 pt-5' backRoute={Routes.addOns} />
          <div className='w-full px-10 pt-2'>
            <p className='text-base font-semibold'>Booking Ref: {TRIP_REF}</p>
            <h1 className='font-bold text-3xl'>Your itinerary at a glance</h1>
          </div>
        </div>
      </div>
    </PageWithHeader>
  );
};

export default Overview;
