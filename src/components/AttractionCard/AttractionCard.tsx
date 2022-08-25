import React from 'react';

import { IonCard, IonCardSubtitle, IonIcon } from '@ionic/react';
import { checkmarkCircle } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@components/Button';
import { showAttractionModal } from '@/store/ui/uiSlice';
import { setCurrentAttractionView } from '@/store/attractions/attractionSlice';
import { getChosenAttractions } from '@/store/attractions/attractionSlice';
import { TRIP_REF } from '@/constants/dummyData';
import starIcon from '@/assets/icons/star.svg';

type Props = {
  className?: string;
  title: string;
  imgUrl: string;
  price?: string;
  id: number;
  rating: number;
};

const AttractionCard = ({ className, title, imgUrl, price, id, rating }: Props) => {
  const dispatch = useDispatch();
  const chosenAttractions = useSelector(getChosenAttractions);
  const chosenAttraction = chosenAttractions?.find(attraction => attraction.id === id && attraction.tripRef === TRIP_REF);
  const isAttractionChosen = chosenAttraction ? true : false;

  return (
    <IonCard className={`h-56 font-helvetica relative ${className}`}>
      <img className='object-cover h-full w-full' src={imgUrl} />

      {/* Checkmark */}
      {isAttractionChosen && (
        <IonIcon className='absolute top-0 left-0 mt-1.5 ml-1.5 py-0.5 text-3xl text-[#4BB543]' icon={checkmarkCircle} />
      )}

      {/* Rating */}
      <div className='rounded-lg absolute flex top-0 right-0 mt-2 mr-2 py-0.5 pl-2 pr-1 bg-[#ffffffbf]'>
        <p className='text-black mt-0.5 text-xl'>{rating}</p>
        <IonIcon className='text-3xl' icon={starIcon} />
      </div>

      {/* Bottom Text Nav */}
      <div className='absolute bg-transparentGrey bottom-0 py-3 px-8 w-full'>
        <IonCardSubtitle mode='md' className='text-white font-helvetica text-sm font-semibold'>
          {title}
        </IonCardSubtitle>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex items-center'>
            <p className='text-white font-helvetica font-semibold'>{price && `From SGD ${price}`}</p>
          </div>
          <div>
            <Button
              onClick={() => {
                dispatch(setCurrentAttractionView(id));
                dispatch(showAttractionModal());
              }}
              className='w-full'
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </IonCard>
  );
};

export default AttractionCard;
