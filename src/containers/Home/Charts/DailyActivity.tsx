import { GlobalContext } from 'Router';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { getUserActivity } from 'tools/API';
import { Barplot } from 'components/Barplot';

export function DailyActivity() {
  const { user } = useContext(GlobalContext);
  const [data, setData] = useState([]);
  const ref = useRef(null);
  const [width, setWidth] = useState(1000);

  const fetchData = async () => {
    const response = await getUserActivity(user!.id);
    setData(
      response.data.data.sessions.map((session: any, index: any) => {
        return {
          name: index,
          value1: session.calories,
          value2: session.kilogram,
        };
      })
    );
    console.log(data);
  };

  useEffect(() => {
    if (user) fetchData();
  }, [user]);

  useEffect(() => {
    // @ts-ignore
    if (ref) setWidth(ref.current!.offsetWidth);
  }, []);

  return (
    <div className="rounded-md bg-lightGray p-8">
      <div className="flex justify-between" ref={ref}>
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
      <Barplot width={width} height={300} data={data} />
    </div>
  );
}
