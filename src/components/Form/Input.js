import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@unform/core';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
}
Input.defaultProps = {
  name: '',
  width: '',
};
Input.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
};
