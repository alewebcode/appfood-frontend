import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Select from './Select';

import { BannerTitle, Content, Container, Form, ListItems } from './styles';
import { SearchFilter } from './SearchFilter';
import api from '../../services/api';

export default function ListCompanies() {
  // const formRef = useRef(null);

  const [options, setOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState('');
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const uploads = 'http://192.168.0.102:3333/uploads';

  useEffect(() => {
    setOptions(location.state.cities);
    setSelectedCity(location.state.selectedCity);

    async function loadCompanies() {
      const response = await api.get(
        `/companies/searchCompanies?filterCity=${location.state.selectedCity.value}`
      );

      setCompanies(response.data);
      setIsLoaded(true);

      if (search) {
        const filters = await api.get(
          `/companies/searchCompanies?filterCompany=${search.toLowerCase()}`
        );

        setCompanies(filters.data);
      }
    }

    loadCompanies();
  }, [search]);

  async function changeCity(event) {
    setSelectedCity(event);
    const response = await api.get(
      `/companies/searchCompanies?filterCity=${event.value}`
    );

    setCompanies(response.data);
  }

  return (
    <>
      <BannerTitle>
        <h1>LOJAS DISPONÍVEIS</h1>
      </BannerTitle>
      <Container>
        <Content>
          <Form>
            <label htmlFor="nome">Cidade</label>
            <Select
              name="nome"
              options={options}
              value={selectedCity}
              onChange={changeCity}
            />

            <SearchFilter
              onSearch={value => {
                setSearch(value);
              }}
            />
          </Form>
          <ListItems>
            {!isLoaded ? (
              <p>Carregando...</p>
            ) : (
              companies.map(company => (
                <Link
                  to={{
                    pathname: '/products/company',
                    company,
                  }}
                >
                  <div key={company.id}>
                    <img src={`${uploads}/${company.logo}`} alt="logo" />
                    <h1>{company.name}</h1>
                    <span>{company.segment.description}</span>
                  </div>
                </Link>
              ))
            )}
          </ListItems>
        </Content>
      </Container>
    </>
  );
}
