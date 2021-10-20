import React from 'react';
import ReactSelect from 'react-select';
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function Select({ options, onChange, value }) {
  const customStyles = {
    control: styles => ({
      ...styles,
      flex: 1,
      backgroundColor: 'white',
      width: 500,
      height: '48px',
      minWidth: 200,
      borderColor: '#d1cacb',
      boxShadow: 'none',
      borderRadius: 20,

      '&:hover': { borderColor: '#EBE1E2' },
    }),
  };

  return (
    <>
      <ReactSelect
        style={{ flex: 1 }}
        cacheOptions
        options={options}
        onChange={onChange}
        value={value}
        styles={customStyles}
      />
    </>
  );
}
// Select.defaultProps = {
//   options: [],
//   onChange: null,
//   value: '',
// };

// Select.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.oneOfType([
//       PropType.number,
//       PropType.string
//     ])
//   ),
//   onChange: PropTypes.func,
//   value: PropTypes.string,
// };
