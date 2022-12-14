import React, { useState } from 'react';

import PageWithHeader from '@components/PageWithHeader';
import BackButton from '@/components/BackButton';
import TopNavigationBar from '@components/TopNavigationBar';
import Button from '@components/Button';
import PaymentInput from '@components/PaymentInput';
import Loading from '@components/Loading';

import Routes from '@/utilities/routes';
import { TRIP_REF } from '@/constants/dummyData';
import { navigationStates } from '@/constants/constants';
import { getChosenAttractions } from '@/store/attractions/attractionSlice';
import { setPurchased } from '@/store/attractions/attractionSlice';

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonFooter, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

const Purchase = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const chosenAttractions = useSelector(getChosenAttractions) ?? [];
  const totalPrice = chosenAttractions?.reduce((x, y) => x + parseFloat(y.price ?? '0'), 0).toFixed(2);

  const handlePurchase = () => {
    setIsLoading(true);
    dispatch(setPurchased());
    setTimeout(() => {
      setIsLoading(false);
      history.push(Routes.review);
    }, 2500);
  };

  return (
    <PageWithHeader>
      <Loading isLoading={isLoading} loadingMessage='Processing...' />
      <TopNavigationBar state={navigationStates.completePayment} />
      <div className='grid grid-cols-1 h-full w-screen'>
        <div className='z-20'>
          <BackButton className='pl-8 pt-2' backRoute={Routes.overview} />
          <div className='w-full px-10 pt-2'>
            <p className='text-base font-semibold'>Booking Ref: {TRIP_REF}</p>
            <h1 className='font-bold text-3xl'>Complete your payment</h1>
          </div>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle mode='ios'>Total Price</IonCardSubtitle>
              <IonCardTitle mode='ios' className='text-2xl'>
                SGD {totalPrice}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <PaymentInput />
            </IonCardContent>
          </IonCard>

          <div className='w-full p-16'></div>
        </div>
      </div>
      <IonFooter className='px-4 flex items-center z-40 fixed bottom-0 h-24 bg-transparentGrey'>
        <Button onClick={handlePurchase} className='w-full'>
          Purchase
        </Button>
      </IonFooter>
    </PageWithHeader>
  );
};

export default Purchase;
