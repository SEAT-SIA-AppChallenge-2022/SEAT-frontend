import React from 'react';

import { IonButton } from '@ionic/react';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ className, children, onClick }: Props) => {
  return (
    <IonButton onClick={onClick} mode='ios' className={`text-xs font-semibold ${className}`}>
      {children}
    </IonButton>
  );
};

export default Button;
