import React from 'react';

export function DailyActivity() {
  return (
    <div className="rounded-md bg-lightGray p-8">
      <div className="flex justify-between">
        <p className="font-semibold">Activité quotidienne</p>
        <div className="flex items-center gap-[32px]">
          <div className="flex items-center gap-[8px]">
            <div className="bg-darkGray rounded-full h-2 aspect-square"></div>
            <p className="text-gray">Poids (kg)</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="bg-primary rounded-full h-2 aspect-square"></div>
            <p className="text-gray">Calories brulées (kCal)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
