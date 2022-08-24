import React from 'react';
import { IonIcon } from '@ionic/react';
import scoot from './scoot.svg';

type Props = {
  className?: string;
};

const ScootLogo = ({ className }: Props) => {
  return (
    <div className={`rounded-full bg-white w-[63px] h-[63px] flex justify-center items-center ${className}`}>
      <IonIcon className='pl-1 w-16 h-16' icon={scoot} />
    </div>
  );
};

export default ScootLogo;
