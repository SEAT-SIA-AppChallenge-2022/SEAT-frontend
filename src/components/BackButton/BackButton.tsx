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
    <div className={`flex cursor-pointer ${className}`}>
      <div className='flex' onClick={() => history.push(backRoute)}>
        <IonIcon className='text-3xl' icon={leftArrow} />
        <p className='pt-1 font-medium'>Back</p>
      </div>
    </div>
  );
};

export default BackButton;
