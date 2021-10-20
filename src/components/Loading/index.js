import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Loading({ loading }) {
  return (
    <Container>
      <BeatLoader color="#ed7a4d" loading={loading} css={override} size={25} />
    </Container>
  );
}

Loading.defaultProps = {
  loading: false,
};
Loading.propTypes = {
  loading: PropTypes.bool,
};
