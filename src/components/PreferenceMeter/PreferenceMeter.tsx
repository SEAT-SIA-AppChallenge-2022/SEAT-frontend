import React from 'react';

type Props = {
  name: string;
};

const PreferenceMeter = ({ name }: Props) => {
  const preferenceMeter = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];

  return (
    <fieldset className='w-full pb-4 pt-1'>
      <div className='w-full flex justify-center space-y-0 space-x-12 bg-white py-3 px-5 rounded-md'>
        {preferenceMeter.map(preference => (
          <div key={preference.id} className='flex items-center'>
            <input
              id={preference.id}
              name={name}
              type='radio'
              defaultChecked={preference.id === '3'}
              className='focus:ring-[#1F201E] h-4 w-4 text-[#1F201E] border-gray-300'
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default PreferenceMeter;
