import React from 'react';
import { useHistory } from 'react-router';

import leftArrow from '@/assets/icons/left-arrow-icon.svg';
import { IonIcon } from '@ionic/react';

type Props = {
  backRoute: string;
  className?: string;
};

const BackButton = ({ backRoute, className }: Props) => {
  const history = useHistory();
  return (
    <div onClick={() => history.push(backRoute)} className={`flex cursor-pointer ${className}`}>
      <IonIcon className='text-3xl' icon={leftArrow} />
      <p className='pt-1 font-medium'>Back</p>
    </div>
  );
};

export default BackButton;
