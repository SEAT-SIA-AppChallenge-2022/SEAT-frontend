import React from 'react';

import DateTime from '@/types/DateTime/DateTime';
import { timezones } from '@/constants/constants';
import { deleteAttraction } from '@/store/attractions/attractionSlice';

import { IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { trash, airplane } from 'ionicons/icons';
import { useDispatch } from 'react-redux';

type Props = {
  isFlight: boolean;
  date: DateTime;
  title: string;
  price?: string;
  id: number;
  isReview?: boolean;
};

const AttractionCardChip = ({ isFlight, date, title, price, id, isReview = false }: Props) => {
  const dispatch = useDispatch();

  const onHandleDelete = () => {
    dispatch(deleteAttraction(id));
  };

  return (
    <div className='grid grid-cols-5 bg-grey w-full rounded-lg mb-3'>
      <div className='col-span-4 p-2'>
        <IonCardTitle mode='ios' className='text-xl'>
          {isFlight ? 'Flight' : title}
        </IonCardTitle>
        <IonCardSubtitle mode='ios'>{date.toTimezoneDate(timezones.sg).format('DD MMM HHmm')}</IonCardSubtitle>
        {price && <IonCardSubtitle mode='ios'>SGD {price}</IonCardSubtitle>}
        {isFlight && <IonCardSubtitle mode='ios'>SIN --&gt; LDN (LHR)</IonCardSubtitle>}
      </div>
      {!isReview && (
        <div
          onClick={isFlight ? () => '' : onHandleDelete}
          className={`flex col-span-1 rounded-r-lg items-center justify-center ${isFlight ? 'bg-[#4BB543]' : 'bg-[#eb445a]'}`}
        >
          <IonIcon icon={isFlight ? airplane : trash} className='text-black text-2xl' />
        </div>
      )}
    </div>
  );
};

export default AttractionCardChip;
