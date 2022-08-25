import React from 'react';

import { IonButton } from '@ionic/react';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  badge?: number;
  disabled?: boolean;
  color?: string;
};

const Button = ({ className, children, onClick, badge, disabled = false, color = 'primary' }: Props) => {
  return (
    <div className={`relative ${className}`}>
      {badge !== 0 && badge && (
        <div className='absolute z-10 right-[-10px] flex items-center justify-center h-7 w-7 bg-black text-white rounded-full'>{badge}</div>
      )}
      <IonButton color={color} disabled={disabled} onClick={onClick} mode='ios' className={`text-xs font-semibold w-full`}>
        {children}
      </IonButton>
    </div>
  );
};

export default Button;
