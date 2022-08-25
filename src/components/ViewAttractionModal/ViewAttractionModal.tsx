import React from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import ClickAwayListener from 'react-click-away-listener';

import Button from '@components/Button';
import DateTimePicker from '@components/DateTimePicker';
import { hideAttractionModal, getIsAttractionModalOpen } from '@/store/ui/uiSlice';
import { getCurrentAttractionView } from '@/store/attractions/attractionSlice';

const ViewAttractionModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsAttractionModalOpen);
  const currentAttraction = useSelector(getCurrentAttractionView);
  if (!currentAttraction) return <></>;

  const { id, imgUrl, category, title, description, price } = currentAttraction;

  const handleAddClick = () => {
    console.log(id);
    dispatch(hideAttractionModal());
  };

  const handleClickAway = () => {
    dispatch(hideAttractionModal());
  };

  return isOpen ? (
    <div className={`absolute z-40 w-screen h-screen bg-[#000000b3]`}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <IonCard className='mt-12 z-50'>
          <img src={imgUrl} />
          <IonCardHeader>
            <IonCardSubtitle mode='ios'>{category}</IonCardSubtitle>
            <IonCardTitle mode='ios'>{title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent mode='ios'>
            {description}
            <IonCardSubtitle mode='ios'>Starts from SGD {price}</IonCardSubtitle>
            <div className='flex w-full justify-end mt-5'>
              <DateTimePicker />
            </div>
            <div className='flex w-full justify-end'>
              <Button onClick={handleAddClick} className='w-32'>
                Add
              </Button>
            </div>
          </IonCardContent>
        </IonCard>
      </ClickAwayListener>
    </div>
  ) : (
    <></>
  );
};

export default ViewAttractionModal;
