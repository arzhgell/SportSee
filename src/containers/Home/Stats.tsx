import {
  faAppleAlt,
  faDrumstickBite,
  faFire,
  faHamburger,
} from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from 'Router';
import { StatCard } from 'components/StatCard';
import React, { useContext, useEffect } from 'react';

export function Stats() {
  const { user } = useContext(GlobalContext);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <section className="w-3/12 flex flex-col gap-[32px]">
      <StatCard
        label={`${user?.keyData.calorieCount}kCal`}
        subLabel="Calories"
        icon={faFire}
        color="primary"
      />
      <StatCard
        label={`${user?.keyData.proteinCount}g`}
        subLabel="Proteines"
        icon={faDrumstickBite}
        color="blue"
      />
      <StatCard
        label={`${user?.keyData.carbohydrateCount}g`}
        subLabel="Glucides"
        icon={faAppleAlt}
        color="yellow"
      />
      <StatCard
        label={`${user?.keyData.lipidCount}g`}
        subLabel="Lipides"
        icon={faHamburger}
        color="pink"
      />
    </section>
  );
}
