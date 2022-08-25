import React from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import ClickAwayListener from 'react-click-away-listener';

import Button from '@components/Button';
import DateTimePicker from '@components/DateTimePicker';
import { hideAttractionModal, getIsAttractionModalOpen } from '@/store/ui/uiSlice';
import { getCurrentAttractionView, addAttraction, getChosenAttractions } from '@/store/attractions/attractionSlice';

const ViewAttractionModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsAttractionModalOpen);
  const currentAttraction = useSelector(getCurrentAttractionView);
  const chosenAttractions = useSelector(getChosenAttractions);
  if (!currentAttraction) return <></>;
  const { id, imgUrl, category, title, description, price, tripRef } = currentAttraction;
  const isAttractionChosen = chosenAttractions?.find(attraction => attraction.id === id && attraction.tripRef === tripRef) ? true : false;

  const handleAddClick = () => {
    dispatch(addAttraction(currentAttraction));
    dispatch(hideAttractionModal());
  };

  const handleClickAway = () => {
    dispatch(hideAttractionModal());
  };

  return isOpen ? (
    <div className={`absolute flex justify-center items-center overflow-y-auto z-40 w-screen h-screen bg-[#000000b3]`}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <IonCard className='relative z-50 h-[550px] overflow-y-hidden'>
          <img className='object-cover w-full h-44' src={imgUrl} />
          <IonCardHeader>
            <IonCardSubtitle mode='ios'>{category}</IonCardSubtitle>
            <IonCardSubtitle mode='ios'>Starts from SGD {price}</IonCardSubtitle>
            <IonCardTitle mode='ios'>{title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className='text-justify h-40 overflow-y-scroll' mode='ios'>
            {description}
          </IonCardContent>
          <div className='w-full p-5'>
            <div className='flex w-full justify-end'>
              <DateTimePicker />
            </div>
            <div className='flex w-full justify-end'>
              <Button disabled={isAttractionChosen} onClick={handleAddClick} className='w-32'>
                {isAttractionChosen ? 'Added' : 'Add'}
              </Button>
            </div>
          </div>
        </IonCard>
      </ClickAwayListener>
    </div>
  ) : (
    <></>
  );
};

export default ViewAttractionModal;
