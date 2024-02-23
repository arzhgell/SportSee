import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ButtonType = {
  onClick: () => void;
  icon: any;
};

export function Button({ onClick, icon }: ButtonType) {
  return (
    <button onClick={onClick} className="rounded-[6px] p-2 bg-white">
      <FontAwesomeIcon icon={icon} className="text-primary text-[36px]" />
    </button>
  );
}
