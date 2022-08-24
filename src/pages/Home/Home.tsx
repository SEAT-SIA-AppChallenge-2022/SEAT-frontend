import React from 'react';

import PageWithHeader from '@components/PageWithHeader';
import OptionsDropdown from '@components/OptionsDropdown';
import TopNavigationBar from '@components/TopNavigationBar';
import AttractionCard from '@components/AttractionCard';
import BackButton from '@components/BackButton';

import lobster from '@/assets/imgs/lobster.jpeg';
import { navigationStates } from '@/constants/constants';

const Home: React.FC = () => {
  return (
    <PageWithHeader>
      <TopNavigationBar state={navigationStates.pickAttractions} />

      <div className='grid grid-cols-1 h-full w-screen'>
        <div className='z-20'>
          <BackButton backRoute='' className='pt-5 pl-8' />
          <div className='w-full px-10'>
            <h1 className='font-bold text-3xl'>Escape the Ordinary</h1>
            <p className='text-base'>Recommendations curated for you</p>

            <OptionsDropdown className='mt-8' />
          </div>

          <AttractionCard className='mt-8' title='Something cool!' imgUrl={lobster} price='13.50' />
        </div>
      </div>
    </PageWithHeader>
  );
};

export default Home;
