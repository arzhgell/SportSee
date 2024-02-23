import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { LateralBar } from './LateralBar';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

export function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header
        links={[
          { to: '/', label: 'Accueil' },
          { to: '/profile', label: 'Profil' },
          { to: '/parameters', label: 'Réglages' },
          { to: '/community', label: 'Communauté' },
        ]}
      />
      <div className="flex grow gap-8">
        <LateralBar
          buttons={[
            {
              icon: faBicycle,
              onClick: () => {
                console.log('bicycle');
              },
            },
            {
              icon: faBicycle,
              onClick: () => {
                console.log('bicycle');
              },
            },
            {
              icon: faBicycle,
              onClick: () => {
                console.log('bicycle');
              },
            },
            {
              icon: faBicycle,
              onClick: () => {
                console.log('bicycle');
              },
            },
          ]}
        />
        <div className="grow py-8 px-8 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
