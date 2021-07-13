import React from 'react';

import {
  // BootomSide,
  Container,
  Content,
  NavMenu,
  Logo,
} from './styles';

import { Burger } from './Burger';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <h2>Logo</h2>
        </Logo>
        <NavMenu>
          <Burger />
        </NavMenu>
      </Content>
    </Container>
  );
}
