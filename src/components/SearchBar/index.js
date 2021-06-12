import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

import { Container, Content } from './styles';

export default function SearchBar() {
  const [selectData, setSelectData] = useState('');
  const mapResponseToValuesAndLabels = data => ({
    value: data.id,
    label: data.name,
  });
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

  async function callApi(value) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(response => response.map(mapResponseToValuesAndLabels))
      .then(final =>
        final.filter(i => i.label.toLowerCase().includes(value.toLowerCase()))
      );

    return data;
  }

  return (
    <Container>
      <Content>
        <AsyncSelect
          style={{ flex: 1 }}
          cacheOptions
          loadOptions={callApi}
          onChange={data => {
            setSelectData(data);
          }}
          value={selectData}
          styles={customStyles}
          placeholder="Buscar cidade"
        />
        <button type="button">BUSCAR</button>
      </Content>
    </Container>
  );
}
