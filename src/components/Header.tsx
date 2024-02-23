import React from 'react';
import logo from 'assets/illustrations/logo.svg';
import { NavLink } from 'react-router-dom';

type HeaderType = {
  links: { to: string; label: string }[];
};
export function Header({ links }: HeaderType) {
  return (
    <header className="flex w-full justify-between bg-black py-2 px-4 shadow-lg">
      <img src={logo} alt="logo" />
      <nav className="text-white flex w-10/12 justify-between items-center text-[24px] px-24">
        {links.map((link) => {
          return <NavLink to={link.to}>{link.label}</NavLink>;
        })}
      </nav>
    </header>
  );
}
