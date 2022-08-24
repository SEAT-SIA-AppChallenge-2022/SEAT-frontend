import React from 'react';

import { Menu } from '@headlessui/react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Option = ({ children, onClick }: Props) => {
  return (
    <Menu.Item>
      <a onClick={onClick} className='block px-4 py-2 text-sm'>
        {children}
      </a>
    </Menu.Item>
  );
};

export default Option;
