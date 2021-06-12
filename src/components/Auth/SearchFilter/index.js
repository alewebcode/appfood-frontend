import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { Search, Container, Icon } from './styles';
import useDebounce from './useDebounce';

export function SearchFilter({ onSearch }) {
  const [search, setSearch] = useState('');
  const debouncedChange = useDebounce(onSearch, 500);

  function onInputChange(value) {
    // console.log(search);
    setSearch(value);
    debouncedChange(value);
  }

  return (
    <Container>
      <Search
        type="text"
        name="search"
        value={search}
        onChange={e => onInputChange(e.target.value)}
      />
      <Icon>
        <FiSearch size={20} />
      </Icon>
    </Container>
  );
}

SearchFilter.defaultProps = {
  onSearch: null,
};

SearchFilter.propTypes = {
  onSearch: PropTypes.func,
};
