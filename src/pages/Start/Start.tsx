import React, { useState, useEffect } from 'react';

import PageWithHeader from '@components/PageWithHeader';
import PreferenceMeter from '@components/PreferenceMeter';
import LabelTitle from '@components/LabelTitle';
import Button from '@components/Button';

import Routes from '@/utilities/routes';
import { TRIP_REF, users, GUEST } from '@/constants/dummyData';
import { setAllUsers, setCurrentUser } from '@/store/authentication/authSlice';
import { User } from '@/types/User/type';

import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const Start = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllUsers(users));
  }, []);

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
    const newGuest: User = {
      ...GUEST,
      inOutScore: outdoorIndoorScore,
      leisureThrillScore: leisureThrillScore,
      cheapExpScore: affordableLuxuryScore,
    };
    dispatch(setCurrentUser(newGuest));
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
            <h1 className='font-bold text-xl'>What kind of traveller are you?</h1>
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
