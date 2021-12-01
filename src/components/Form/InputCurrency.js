import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@unform/core';
import NumberFormat from 'react-number-format';

export default function InputCurrency({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = inputValue;
    }
  }, [inputValue]);

  function currencyFormatter(value) {
    if (!Number(value)) return '';

    setInputValue(value);

    const amount = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      signDisplay: 'never',
    })
      .format(value / 100)
      .replace('R$', '');

    return `${amount}`;
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue: (_, value) => {
        setInputValue(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <NumberFormat
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        format={currencyFormatter}
        value={inputValue}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
}

InputCurrency.defaultProps = {
  name: '',
};
InputCurrency.propTypes = {
  name: PropTypes.string,
};
