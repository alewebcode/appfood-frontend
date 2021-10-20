import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import api from '../../services/api';

import { Container, Content } from './styles';

export default function SearchBar() {
  const history = useHistory();
  const [selectData, setSelectData] = useState('');
  const [initialOptions, setOptions] = useState([]);

  const customStyles = {
    control: styles => ({
      ...styles,
      // display: 'flex',
      flex: 1,
      backgroundColor: 'white',
      width: 800,
      minWidth: 200,
      borderColor: '#EBE1E2',
      boxShadow: 'none',
      '&:hover': { borderColor: '#EBE1E2' },
    }),
  };

  useEffect(() => {
    async function loadInitialItems() {
      const response = await api.get('/cities');

      const options = response.data.map(city => ({
        slug: city.slug,
        label: city.name,
      }));

      setOptions(options);
    }

    loadInitialItems();
  }, [selectData]);

  // const filteredOptions = useMemo(
  //   () => initialOptions.map(data => ({ label: data.name, value: data.name })),
  //   [initialOptions]
  // );

  const filterOptions = search =>
    initialOptions.filter(i =>
      i.label.toLowerCase().includes(search.toLowerCase())
    );

  function loadOptions(selectData_, cb) {
    setTimeout(() => {
      cb(filterOptions(selectData_));
    }, 3000);
  }

  function handleChange(newValue) {
    setSelectData(newValue);
  }

  function searchCompanies() {
    history.push({
      pathname: `/lista-lojas/${selectData.slug}`,
      state: { selectedCity: selectData, cities: initialOptions },
    });
  }

  return (
    <Container>
      <Content>
        <AsyncSelect
          isClearable
          style={{ flex: 1 }}
          cacheOptions
          loadOptions={loadOptions}
          onChange={handleChange}
          value={selectData}
          styles={customStyles}
          placeholder="Buscar cidade"
          noOptionsMessage={() => 'Sem dados'}
        />
        <button type="button" onClick={searchCompanies}>
          BUSCAR
        </button>
      </Content>
    </Container>
  );
}
