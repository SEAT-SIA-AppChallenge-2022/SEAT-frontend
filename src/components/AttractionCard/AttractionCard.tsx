import React from 'react';

import { IonCard, IonCardSubtitle } from '@ionic/react';
import { useDispatch } from 'react-redux';

import Button from '@components/Button';
import { showAttractionModal } from '@/store/ui/uiSlice';

type Props = {
  className?: string;
  title: string;
  imgUrl: string;
  price?: string;
};

const AttractionCard = ({ className, title, imgUrl, price }: Props) => {
  const dispatch = useDispatch();
  return (
    <IonCard className={`font-helvetica relative ${className}`}>
      <img src={imgUrl} />
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
