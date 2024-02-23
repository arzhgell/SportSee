import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type StatCardType = {
  color: string;
  icon: any;
  label: string;
  subLabel: string;
};

export function StatCard({ color, icon, label, subLabel }: StatCardType) {
  return (
    <div className="rounded-md bg-lightGray flex items-center gap-[32px] p-12">
      <div
        className={`bg-${color}/10 aspect-square w-1/3 flex items-center justify-center rounded-md`}
      >
        <FontAwesomeIcon icon={icon} className={`text-${color} text-[32px]`} />
      </div>
      <div>
        <p className="font-bold text-[32px] text-darkGray">{label}</p>
        <p className="text-gray text-[18px] font-semibold">{subLabel}</p>
      </div>
    </div>
  );
}
