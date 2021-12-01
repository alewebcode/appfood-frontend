import React from 'react';

import { Container, Content, NavMenu } from './styles';
import { Burger } from './Burger';
import logo from '../../assets/logo.png';

export function Header() {
  // const ref = useRef(null);

  // const handleClickOutside = event => {
  //   if (ref.current && !ref.current.contains(event.target)) {
  //     setOpenMenuUser(false);
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   };
  // });

  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <NavMenu>
          <Burger />
        </NavMenu>
      </Content>
    </Container>
  );
}
