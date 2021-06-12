import React from 'react';
import PropTypes from 'prop-types';

import { Container, Wrapper } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function Default({ children }) {
  return (
    <Wrapper>
      <Header />

      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
