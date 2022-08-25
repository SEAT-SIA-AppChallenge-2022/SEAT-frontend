import React from 'react';

import PageWithHeader from '@components/PageWithHeader';
import BackButton from '@/components/BackButton';
import TopNavigationBar from '@components/TopNavigationBar';
import Button from '@components/Button';
import OverviewCard from '@components/OverviewCard';
import AttractionCardChip from '@/components/OverviewCard/AttractionCardChip';

import Routes from '@/utilities/routes';
import { TRIP_REF } from '@/constants/dummyData';
import { navigationStates } from '@/constants/constants';
import { getChosenAttractions } from '@/store/attractions/attractionSlice';
import { timezones } from '@/constants/constants';
import { ChosenAttraction } from '@/types/attractions/attractions';
import DateTime from '@/types/DateTime/DateTime';

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonFooter } from '@ionic/react';

import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Overview = () => {
  const history = useHistory();
  const chosenAttractions = useSelector(getChosenAttractions) ?? [];
  const chosenAttractionsCopy = [...chosenAttractions];
  chosenAttractionsCopy.sort((x, y) => new Date(x.chosenDate.toString()).getTime() - new Date(y.chosenDate.toString()).getTime());
  const totalPrice = (400 + chosenAttractions?.reduce((x, y) => x + parseFloat(y.price ?? '0'), 0)).toFixed(2);

  const flightDayDate = (): DateTime => {
    if (chosenAttractionsCopy.length === 0) return DateTime.newDateTimeFromDate(new Date());
    const flightDay = DateTime.newDateTimeFromUTCString(chosenAttractionsCopy[0].chosenDate.toString());

    return DateTime.newDateTimeFromUTCString(
      flightDay.toTimezoneDate(timezones.sg).subtract(1, 'days').format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z',
    );
  };

  const renderGroupedDayActivities = (attractions: ChosenAttraction[]) => {
    if (attractions.length === 0) return <></>;
    const date = attractions[0].chosenDate;

    return (
      <OverviewCard date={date}>
        {attractions.map(a => (
          <AttractionCardChip isFlight={false} key={a.id} id={a.id} title={a.title} price={a.price} date={a.chosenDate} />
        ))}
      </OverviewCard>
    );
  };

  // Group By Same Day
  const sameDayAttractions = Array.from(
    new Set(chosenAttractionsCopy.map(a => a.chosenDate.toTimezoneDate(timezones.sg).format('DD MM YYYY'))),
  ).map((date: string) =>
    renderGroupedDayActivities(chosenAttractionsCopy.filter(a => a.chosenDate.toTimezoneDate(timezones.sg).format('DD MM YYYY') === date)),
  );

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

          <OverviewCard date={flightDayDate()}>
            <AttractionCardChip isFlight={true} date={flightDayDate()} price='400' title='' id={0} />
          </OverviewCard>

          {sameDayAttractions}

          <div className='w-full p-16'></div>
        </div>
      </div>

      <IonFooter className='px-4 flex items-center z-40 fixed bottom-0 h-24 bg-transparentGrey'>
        <Button disabled={chosenAttractions.length === 0} onClick={() => history.push(Routes.purchase)} className='w-full'>
          Purchase
        </Button>
      </IonFooter>
    </PageWithHeader>
  );
};

export default Overview;
