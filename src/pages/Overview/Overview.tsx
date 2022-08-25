import React from 'react';

import PageWithHeader from '@components/PageWithHeader';
import BackButton from '@/components/BackButton';
import TopNavigationBar from '@components/TopNavigationBar';
import Button from '@components/Button';

import Routes from '@/utilities/routes';
import { TRIP_REF } from '@/constants/dummyData';
import { navigationStates } from '@/constants/constants';
import { getChosenAttractions } from '@/store/attractions/attractionSlice';

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonFooter } from '@ionic/react';

import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Overview = () => {
  const history = useHistory();
  const chosenAttractions = useSelector(getChosenAttractions);
  const totalPrice = chosenAttractions?.reduce((x, y) => x + parseFloat(y.price ?? '0'), 0);

  return (
    <PageWithHeader>
      <TopNavigationBar state={navigationStates.reviewCart} />
      <div className='grid grid-cols-1 h-full w-screen'>
        <div className='z-20'>
          <BackButton className='pl-8 pt-2' backRoute={Routes.addOns} />
          <div className='w-full px-10 pt-2'>
            <p className='text-base font-semibold'>Booking Ref: {TRIP_REF}</p>
            <h1 className='font-bold text-3xl'>Your itinerary at a glance</h1>
          </div>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle mode='ios'>Total Price</IonCardSubtitle>
              <IonCardTitle mode='ios' className='text-2xl'>
                SGD {totalPrice}
              </IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </div>
      </div>

      <IonFooter className='px-4 flex items-center z-40 fixed bottom-0 h-24 bg-transparentGrey'>
        <Button onClick={() => history.push(Routes.purchase)} className='w-full'>
          Purchase
        </Button>
      </IonFooter>
    </PageWithHeader>
  );
};

export default Overview;
