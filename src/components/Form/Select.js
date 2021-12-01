/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';

import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

// eslint-disable-next-line react/prop-types
export default function Select({ name, options, ...rest }) {
  const selectRef = useRef(null);
  // eslint-disable-next-line no-unused-vars

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const customStyles = {
    control: styles => ({
      ...styles,
      display: 'flex',
      flex: 1,
      backgroundColor: 'white',
      height: 48,
      minWidth: 200,
      borderColor: '#d3e2e5;',
      borderRadius: 20,
      boxShadow: '0 !important',
      '&:hover': {
        borderColor: '#d3e2e5;',
      },
    }),
    dropdownIndicator: styles => ({
      ...styles,
      height: 30,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    indicatorSeparator: styles => ({
      ...styles,
      height: 30,
    }),
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map(option => option.value);
        }
        if (!ref.state.value) {
          return '';
        }

        return ref.state.value.value;
      },
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <>
      <ReactSelect
        // cacheOptions
        defaultValue={
          // eslint-disable-next-line no-undef
          // eslint-disable-next-line react/prop-types
          defaultValue && options.find(option => option.value === defaultValue)
        }
        ref={selectRef}
        classNamePrefix="react-select"
        styles={customStyles}
        // eslint-disable-next-line no-undef
        options={options}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
}

Select.defaultProps = {
  name: '',
};
Select.propTypes = {
  name: PropTypes.string,
};
