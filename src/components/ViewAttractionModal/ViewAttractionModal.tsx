import React, { useState } from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import { DatetimeChangeEventDetail, IonDatetimeCustomEvent } from '@ionic/core';
import ClickAwayListener from 'react-click-away-listener';
import { checkmarkCircle } from 'ionicons/icons';

import Button from '@components/Button';
import DateTimePicker from '@components/DateTimePicker';
import { hideAttractionModal, getIsAttractionModalOpen } from '@/store/ui/uiSlice';
import { getCurrentAttractionView, addAttraction, getChosenAttractions, deleteAttraction } from '@/store/attractions/attractionSlice';
import { TRIP_REF } from '@/constants/dummyData';
import { ChosenAttraction } from '@/types/attractions/attractions';
import DateTime from '@/types/DateTime/DateTime';
import { timezones } from '@/constants/constants';
import starIcon from '@/assets/icons/star.svg';

const ViewAttractionModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsAttractionModalOpen);
  const currentAttraction = useSelector(getCurrentAttractionView);
  const chosenAttractions = useSelector(getChosenAttractions);

  const [chosenDate, setChosenDate] = useState<DateTime>(DateTime.newDateTimeFromDate(new Date()));

  if (!currentAttraction) return <></>;
  const { id, imgUrl, category, title, description, price, rating } = currentAttraction;
  const chosenAttraction = chosenAttractions?.find(attraction => attraction.id === id && attraction.tripRef === TRIP_REF);
  const isAttractionChosen = chosenAttraction ? true : false;

  const handleAddClick = () => {
    const newBooking: ChosenAttraction = { ...currentAttraction, tripRef: TRIP_REF, chosenDate: chosenDate };
    dispatch(addAttraction(newBooking));
    dispatch(hideAttractionModal());
  };

  const handleRemove = () => {
    dispatch(deleteAttraction(id));
  };

  const handleClickAway = () => {
    dispatch(hideAttractionModal());
  };

  const handleDateChange = (e: IonDatetimeCustomEvent<DatetimeChangeEventDetail>) => {
    const chosenDate: string = e.target.value as string;
    setChosenDate(DateTime.newDateTimeFromDate(new Date(chosenDate)));
  };

  return isOpen ? (
    <div className={`absolute flex justify-center items-center overflow-y-auto z-40 w-screen h-screen bg-[#000000b3]`}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <IonCard className='relative z-50 h-[590px] overflow-y-hidden'>
          <img className='object-cover w-full h-44' src={imgUrl} />

          {/* Checkmark */}
          {isAttractionChosen && (
            <IonIcon className='absolute top-0 left-0 mt-1.5 ml-1.5 py-0.5 text-3xl text-[#4BB543]' icon={checkmarkCircle} />
          )}

          {/* Rating */}
          <div className='rounded-lg absolute flex top-0 right-0 mt-2 mr-2 py-0.5 pl-2 pr-1 bg-[#ffffffbf]'>
            <p className='text-black mt-0.5 text-xl'>{rating}</p>
            <IonIcon className='text-3xl' icon={starIcon} />
          </div>

          <IonCardHeader>
            <IonCardSubtitle mode='ios'>{category}</IonCardSubtitle>
            {price && <IonCardSubtitle mode='ios'>Starts from SGD {price}</IonCardSubtitle>}
            <IonCardTitle mode='ios'>{title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className='text-justify h-32 overflow-y-scroll' mode='ios'>
            {description}
          </IonCardContent>
          <div className='absolute w-full p-5 bottom-0'>
            <div className='flex w-full justify-end'>
              <DateTimePicker
                value={
                  chosenAttraction
                    ? chosenAttraction.chosenDate.toTimezoneDate(timezones.sg).format()
                    : chosenDate.toTimezoneDate(timezones.sg).format()
                }
                onChange={handleDateChange}
                disabled={isAttractionChosen}
              />
            </div>
            <div className='flex w-full justify-end'>
              <Button
                color={isAttractionChosen ? 'danger' : 'primary'}
                onClick={isAttractionChosen ? handleRemove : handleAddClick}
                className='w-32'
              >
                {isAttractionChosen ? 'Remove' : 'Add'}
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
