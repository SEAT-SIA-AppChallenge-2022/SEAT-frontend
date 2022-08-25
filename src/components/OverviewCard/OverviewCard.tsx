import React from 'react';

import DateTime from '@/types/DateTime/DateTime';
import { timezones } from '@/constants/constants';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

type Props = {
  date: DateTime;
  children: React.ReactNode;
};

const OverviewCard = ({ date, children }: Props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle mode='ios'>{date.toTimezoneDate(timezones.sg).format('DD MMM')}</IonCardSubtitle>
        <IonCardTitle mode='ios' className='text-2xl'>
          {date.toTimezoneDate(timezones.sg).format('ddd')}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{children}</IonCardContent>
    </IonCard>
  );
};

export default OverviewCard;
