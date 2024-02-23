import React from 'react';
import { Button } from './Button';

type LateralBarType = {
  buttons: { onClick: () => void; icon: any }[];
};

export function LateralBar({ buttons }: LateralBarType) {
  return (
    <div className="flex flex-col bg-black shadow-lg px-4 py-16 justify-center gap-[24px] relative">
      {buttons.map((button) => {
        return <Button icon={button.icon} onClick={button.onClick} />;
      })}
      <p className="text-white -rotate-90 absolute bottom-[15%] left-[-50%] whitespace-nowrap">
        Copiryght, SportSee 2020
      </p>
    </div>
  );
}
