import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { Container, Content, SocialMedia, Copy } from './styles';

export function Footer() {
  return (
    <Container>
      <Content>
        <Copy>© Copyright 2021</Copy>
        <SocialMedia>
          <IconContext.Provider
            value={{
              color: '#FFF',
              size: '2em',

              className: 'primaryBackground',
            }}
          >
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </IconContext.Provider>
        </SocialMedia>
      </Content>
    </Container>
  );
}
