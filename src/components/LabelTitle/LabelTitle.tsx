import React from 'react';

type Props = {
  className?: string;
  title: string;
};

const LabelTitle = ({ className, title }: Props) => {
  return (
    <div className={`${className} text-center bg-yellow rounded-md h-10`}>
      <p className='font-semibold pt-2.5 text-sm'>{title}</p>
    </div>
  );
};

export default LabelTitle;
