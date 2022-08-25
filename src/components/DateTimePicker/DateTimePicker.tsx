import React from 'react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import { DatetimeChangeEventDetail, IonDatetimeCustomEvent } from '@ionic/core';

type Props = {
  disabled?: boolean;
  value: string;
  onChange: (e: IonDatetimeCustomEvent<DatetimeChangeEventDetail>) => void;
};

const DateTimePicker = ({ disabled = false, value, onChange }: Props) => {
  return (
    <>
      <IonDatetimeButton disabled={disabled} color='secondary' datetime='datetime'></IonDatetimeButton>
      <IonModal keepContentsMounted={true}>
        <IonDatetime value={value} onIonChange={event => onChange(event)} color='secondary' id='datetime'></IonDatetime>
      </IonModal>
    </>
  );
};
export default DateTimePicker;
