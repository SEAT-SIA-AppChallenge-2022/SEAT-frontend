import React from 'react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
const DateTimePicker = () => {
  return (
    <>
      <IonDatetimeButton color='secondary' datetime='datetime'></IonDatetimeButton>
      <IonModal keepContentsMounted={true}>
        <IonDatetime color='secondary' id='datetime'></IonDatetime>
      </IonModal>
    </>
  );
};
export default DateTimePicker;
