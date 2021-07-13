import React from 'react';
import PropTypes from 'prop-types';
import { Content } from './styles';

export function ToogleSwitch({ onClick, isToogle }) {
  return (
    <Content>
      <input type="checkbox" onClick={onClick} defaultChecked={isToogle} />
      <span />
    </Content>
  );
}

ToogleSwitch.defaultProps = {
  onClick: null,
  isToogle: false,
};

ToogleSwitch.propTypes = {
  onClick: PropTypes.func,
  isToogle: PropTypes.bool,
};
