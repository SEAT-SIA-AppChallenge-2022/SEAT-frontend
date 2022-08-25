import React from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@components/Button';
import DateTimePicker from '@components/DateTimePicker';
import { hideAttractionModal, getIsAttractionModalOpen } from '@/store/ui/uiSlice';

import lobster from '@/assets/imgs/lobster.jpeg';

const ViewAttractionModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsAttractionModalOpen);
  return (
    <div onClick={() => dispatch(hideAttractionModal())} className={isOpen ? `absolute z-50 w-screen h-screen bg-[#000000b3]` : `hidden`}>
      <IonCard className='mt-12'>
        <img src={lobster} />
        <IonCardHeader>
          <IonCardSubtitle mode='ios'>Activity</IonCardSubtitle>
          <IonCardTitle mode='ios'>Madison, WI</IonCardTitle>
        </IonCardHeader>
        <IonCardContent mode='ios'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
          <div className='flex w-full justify-end mt-5'>
            <DateTimePicker />
          </div>
          <div className='flex w-full justify-end'>
            <Button onClick={() => dispatch(hideAttractionModal())} className='w-32'>
              Add
            </Button>
          </div>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ViewAttractionModal;
