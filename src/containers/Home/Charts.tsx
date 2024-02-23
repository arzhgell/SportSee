import React from 'react';
import { DailyActivity } from './Charts/DailyActivity';
import { SessionDuration } from './Charts/SessionDuration';
import { Intensity } from './Charts/Intensity';
import { Score } from './Charts/Score';

export function Charts() {
  return (
    <section className="w-9/12 flex flex-col gap-[128px]">
      <DailyActivity />
      <div className="flex gap-[16px]">
        <SessionDuration />
        <Intensity />
        <Score />
      </div>
    </section>
  );
}
