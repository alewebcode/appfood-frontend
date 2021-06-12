import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  FiPlusCircle,
  FiEdit,
  FiTrash,
  FiChevronRight,
  FiChevronLeft,
} from 'react-icons/fi';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { SearchFilter } from '../../../components/Auth/SearchFilter';

import {
  Container,
  Content,
  Header,
  Table,
  Actions,
  Pagination,
  PaginationButton,
  PaginationItem,
  PaginationAction,
  PaginationNumber,
} from './styles';

export default function Company() {
  const history = useHistory();
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const limit = 10;

  useEffect(() => {
    async function loadCompanies() {
      const response = await api.get(
        `/companies?page=${currentPage}&limit=${limit}`
      );

      setTotal(response.data.totalResults);
      const totalPages = Math.ceil(total / limit);

      const arrPages = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
      }

      setPages(arrPages);
      setCompanies(response.data.companies);

      if (search) {
        const filters = await api.get(
          `/companies?filter=${search.toLowerCase()}&page=${currentPage}&limit=${limit}`
        );
        setCompanies(filters.data.companies);
      }
    }

    loadCompanies();
  }, []);

  async function deleteCompany(id) {
    const index = companies.findIndex(element => element.id === id);

    await api.delete(`/companies/${id}`);

    setCompanies(companies.splice(index));

    toast.success('Excluído com sucesso');

    history.push('/auth/companies');
  }

  return (
    <Container>
      <Header>
        <strong>Empresas</strong>
        <Link to="company/create">
          {/* <button type="button"> */}
          <FiPlusCircle />
          <span>Novo</span>
          {/* </button> */}
        </Link>
      </Header>
      <SearchFilter
        onSearch={value => {
          setSearch(value);
          setCurrentPage(1);
        }}
      />
      <Content>
        <Table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => (
              <tr key={company.id}>
                <td>{company.name}</td>
                <td>{company.phone}</td>
                <td>{company.email}</td>
                <td>
                  <Actions>
                    <Link to={`company/edit/${company.id}`}>
                      <FiEdit size="24" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteCompany(company.id)}
                    >
                      <FiTrash size="24" />
                    </button>
                  </Actions>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      <Pagination>
        <div>Total de {total} registros</div>
        <PaginationAction>
          {currentPage > 1 && (
            <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
              <FiChevronLeft />
            </PaginationItem>
          )}
          <PaginationButton>
            {pages.map(page => (
              <PaginationNumber
                isSelect={page === currentPage}
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationNumber>
            ))}
          </PaginationButton>
          {currentPage < pages.length && (
            <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
              <FiChevronRight />
            </PaginationItem>
          )}
        </PaginationAction>
      </Pagination>
    </Container>
  );
}
