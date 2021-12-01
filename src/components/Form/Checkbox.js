import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@unform/core';

export default function Checkbox({ name, value, ...rest }) {
  const inputRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const defaultChecked = defaultValue === value;
  // console.log(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,

      getValue: ref => ref.current.checked,
      clearValue: ref => {
        /**
         * If you want to change the default checked for false or true,
         * you can do so here. In this example, when resetting the form,
         * the checkbox goes back to its initial state.
         */
        ref.current.checked = false;
      },
      // eslint-disable-next-line no-shadow
      setValue: (ref, value) => {
        ref.current.checked = value;
      },
    });
  }, [defaultValue, fieldName, registerField, defaultChecked]);

  return (
    <>
      <input
        defaultChecked={defaultValue}
        ref={inputRef}
        value={value}
        type="checkbox"
        id={fieldName}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
}
Checkbox.defaultProps = {
  name: '',
  value: false,
};
Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
};
