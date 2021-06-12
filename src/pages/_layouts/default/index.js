import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Container, Wrapper } from './styles';

import { Header } from '../../../components/Auth/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <ToastContainer />
      <Container>{children}</Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
