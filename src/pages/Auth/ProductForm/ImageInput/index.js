import PropTypes from 'prop-types';
import React, {
  // ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { FiImage } from 'react-icons/fi';

import { useField } from '@unform/core';
import { Container } from './styles';

export default function ImageInput({ name, ...rest }) {
  const inputRef = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback(e => {
    const file = e.target.files?.[0];

    if (!file) {
      setPreview(null);
    }

    const previewURL = URL.createObjectURL(file);

    setPreview(previewURL);
  }, []);

  useEffect(() => {
    setPreview(defaultValue);

    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(value) {
        // console.log('oi');
        setPreview(value);
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container>
      <label htmlFor="logo">
        {!preview ? (
          <div>
            <span>
              <FiImage size={60} />
            </span>
            <span>Adicionar Imagem</span>
          </div>
        ) : (
          <img src={preview} alt="Preview" />
        )}

        <input
          type="file"
          id="logo"
          ref={inputRef}
          onChange={handlePreview}
          {...rest}
        />
      </label>
    </Container>
  );
}
ImageInput.defaultProps = {
  name: '',
};
ImageInput.propTypes = {
  name: PropTypes.string,
};
