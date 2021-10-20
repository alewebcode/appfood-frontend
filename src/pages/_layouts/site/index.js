import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Wrapper } from './styles';

import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

export default function SiteLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <ToastContainer />
      <>{children}</>
      <Footer />
    </Wrapper>
  );
}

SiteLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
