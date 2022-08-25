import React from 'react';

import { IonCard, IonCardSubtitle } from '@ionic/react';
import { useDispatch } from 'react-redux';

import Button from '@components/Button';
import { showAttractionModal } from '@/store/ui/uiSlice';
import { setCurrentAttractionView } from '@/store/attractions/attractionSlice';

type Props = {
  className?: string;
  title: string;
  imgUrl: string;
  price?: string;
  id: number;
};

const AttractionCard = ({ className, title, imgUrl, price, id }: Props) => {
  const dispatch = useDispatch();
  return (
    <IonCard className={`h-56 font-helvetica relative ${className}`}>
      <img className='object-cover h-full w-full' src={imgUrl} />
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
