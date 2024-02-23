import { GlobalContext } from 'Router';
import React, { useContext, useEffect } from 'react';
import { Charts } from './Charts';
import { Stats } from './Stats';

export function Home() {
  const { user } = useContext(GlobalContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (user) {
    return (
      <main className="flex flex-col gap-[64px]">
        <div>
          <p className="text-[48px]">
            Bonjour{' '}
            <span className="text-primary">{user.userInfos.firstName}</span>
          </p>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="flex gap-[16px]">
          <Charts />
          <Stats />
        </div>
      </main>
    );
  } else {
    return <p>Loading...</p>;
  }
}
