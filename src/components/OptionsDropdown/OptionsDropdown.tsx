import React from 'react';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IonIcon } from '@ionic/react';

import downArrow from '@/assets/icons/arrow-down.svg';

type props = {
  className?: string;
};

const OptionsDropdown = ({ className }: props) => {
  return (
    <Menu as='div' className={`relative inline-block text-left w-full ${className}`}>
      <div>
        <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-yellow text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
          All
          <IonIcon className='text-2xl absolute right-4 top-1.5' icon={downArrow} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50'>
          <div className='py-1'>
            <Menu.Item>
              <a className='block px-4 py-2 text-sm'>Dining</a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default OptionsDropdown;
