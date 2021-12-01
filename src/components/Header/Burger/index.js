import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import { MenuBurger } from './styles';
import { LeftNav } from '../LeftNav';

export function Burger() {
  const [open, setOpen] = useState(false);

  function handleCloseMenu() {
    setOpen(!open);
  }

  return (
    <>
      <MenuBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </MenuBurger>
      <LeftNav open={open} close={handleCloseMenu} />
    </>
  );
}
