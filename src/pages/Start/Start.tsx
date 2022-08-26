import React, { useState } from 'react';

import PageWithHeader from '@components/PageWithHeader';
import PreferenceMeter from '@components/PreferenceMeter';
import LabelTitle from '@components/LabelTitle';
import Button from '@components/Button';

import Routes from '@/utilities/routes';
import { TRIP_REF } from '@/constants/dummyData';

import { useHistory } from 'react-router';

const Start = () => {
  const history = useHistory();
  const [outdoorIndoorScore, setOutdoorIndoorScore] = useState<number>(3);
  const [leisureThrillScore, setLeisureThrillScore] = useState<number>(3);
  const [affordableLuxuryScore, setAffordableLuxuryScore] = useState<number>(3);

  const handleOutdoorIndoorChange = (id: number) => {
    setOutdoorIndoorScore(id);
  };
  const handleLeisureThrillChange = (id: number) => {
    setLeisureThrillScore(id);
  };
  const handleAffordableLuxuryChange = (id: number) => {
    setAffordableLuxuryScore(id);
  };

  const handlePersonalise = () => {
    console.log(outdoorIndoorScore);
    console.log(leisureThrillScore);
    console.log(affordableLuxuryScore);
    history.push(Routes.addOns);
  };

  return (
    <PageWithHeader>
      <div className='grid grid-cols-1 h-full w-screen'>
        <div className='z-20'>
          <div className='w-full px-10 pt-10'>
            <p className='text-base font-semibold'>Booking Ref: {TRIP_REF}</p>
            <h1 className='font-bold text-3xl'>Help us get to know you better</h1>
          </div>

          <div className='grid grid-cols-1 w-full justify-items-center mt-10 space-y-2.5 px-5'>
            <LabelTitle className='w-full' title='Outdoors vs Indoors' />
            <PreferenceMeter onChange={id => handleOutdoorIndoorChange(id)} name='OutdoorVsIndoor' />

            <LabelTitle className='w-full' title='Leisure vs Thrill' />
            <PreferenceMeter onChange={id => handleLeisureThrillChange(id)} name='LeisureVsThrill' />

            <LabelTitle className='w-full' title='Affordable vs Luxury' />
            <PreferenceMeter onChange={id => handleAffordableLuxuryChange(id)} name='AffordableVsLuxury' />
          </div>

          <div className='w-full flex justify-end'>
            <Button onClick={() => handlePersonalise()} className='w-32 mr-5'>
              Personalise
            </Button>
          </div>
        </div>
      </div>
    </PageWithHeader>
  );
};

export default Start;
