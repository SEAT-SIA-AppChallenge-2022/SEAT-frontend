import React from 'react';

import PageWithHeader from '@components/PageWithHeader';
import BackButton from '@/components/BackButton';
import TopNavigationBar from '@components/TopNavigationBar';
import Button from '@components/Button';

import Routes from '@/utilities/routes';
import { TRIP_REF } from '@/constants/dummyData';
import { navigationStates } from '@/constants/constants';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonFooter } from '@ionic/react';
import { useHistory } from 'react-router';

const Overview = () => {
  const history = useHistory();
  return (
    <PageWithHeader>
      <TopNavigationBar state={navigationStates.pickAttractions} />
      <div className='grid grid-cols-1 h-full w-screen'>
        <div className='z-20'>
          <BackButton className='pl-8 pt-2' backRoute={Routes.addOns} />
          <div className='w-full px-10 pt-2'>
            <p className='text-base font-semibold'>Booking Ref: {TRIP_REF}</p>
            <h1 className='font-bold text-3xl'>Your itinerary at a glance</h1>
          </div>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle mode='ios'>28 Jul</IonCardSubtitle>
              <IonCardTitle mode='ios' className='text-2xl'>
                THU
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className='bg-[#F0F0F0] w-full rounded-lg p-2 mb-3'>
                <IonCardTitle mode='ios' className='text-xl'>
                  Flight
                </IonCardTitle>
                <IonCardSubtitle mode='ios'>28 Jul 0800</IonCardSubtitle>
                <IonCardSubtitle mode='ios'>SIN --&gt; LDN (LHR)</IonCardSubtitle>
              </div>
              <div className='bg-[#F0F0F0] w-full rounded-lg p-2'>
                <IonCardTitle mode='ios' className='text-xl'>
                  Activity 1
                </IonCardTitle>
                <IonCardSubtitle mode='ios'>28 Jul 0800</IonCardSubtitle>
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle mode='ios'>28 Jul</IonCardSubtitle>
              <IonCardTitle mode='ios' className='text-2xl'>
                THU
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className='bg-[#F0F0F0] w-full rounded-lg p-2 mb-3'>
                <IonCardTitle mode='ios' className='text-xl'>
                  Flight
                </IonCardTitle>
                <IonCardSubtitle mode='ios'>28 Jul 0800</IonCardSubtitle>
                <IonCardSubtitle mode='ios'>SIN --&gt; LDN (LHR)</IonCardSubtitle>
              </div>
              <div className='bg-[#F0F0F0] w-full rounded-lg p-2'>
                <IonCardTitle mode='ios' className='text-xl'>
                  Activity 1
                </IonCardTitle>
                <IonCardSubtitle mode='ios'>28 Jul 0800</IonCardSubtitle>
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle mode='ios'>28 Jul</IonCardSubtitle>
              <IonCardTitle mode='ios' className='text-2xl'>
                THU
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className='bg-[#F0F0F0] w-full rounded-lg p-2 mb-3'>
                <IonCardTitle mode='ios' className='text-xl'>
                  Flight
                </IonCardTitle>
                <IonCardSubtitle mode='ios'>28 Jul 0800</IonCardSubtitle>
                <IonCardSubtitle mode='ios'>SIN --&gt; LDN (LHR)</IonCardSubtitle>
              </div>
              <div className='bg-[#F0F0F0] w-full rounded-lg p-2'>
                <IonCardTitle mode='ios' className='text-xl'>
                  Activity 1
                </IonCardTitle>
                <IonCardSubtitle mode='ios'>28 Jul 0800</IonCardSubtitle>
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle mode='ios'>28 Jul</IonCardSubtitle>
              <IonCardTitle mode='ios' className='text-2xl'>
                THU
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className='bg-[#F0F0F0] w-full rounded-lg p-2 mb-3'>
                <IonCardTitle mode='ios' className='text-xl'>
                  Flight
                </IonCardTitle>
                <IonCardSubtitle mode='ios'>28 Jul 0800</IonCardSubtitle>
                <IonCardSubtitle mode='ios'>SIN --&gt; LDN (LHR)</IonCardSubtitle>
              </div>
              <div className='bg-[#F0F0F0] w-full rounded-lg p-2'>
                <IonCardTitle mode='ios' className='text-xl'>
                  Activity 1
                </IonCardTitle>
                <IonCardSubtitle mode='ios'>28 Jul 0800</IonCardSubtitle>
              </div>
            </IonCardContent>
          </IonCard>
          <div className='w-full p-16'></div>
        </div>
      </div>

      <IonFooter className='px-4 flex items-center z-40 fixed bottom-0 h-24 bg-transparentGrey'>
        <Button onClick={() => history.push(Routes.review)} className='w-full'>
          Review
        </Button>
      </IonFooter>
    </PageWithHeader>
  );
};

export default Overview;
