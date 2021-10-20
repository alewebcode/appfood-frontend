import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  FiPlusCircle,
  FiEdit,
  FiChevronRight,
  FiChevronLeft,
} from 'react-icons/fi';
import { SearchFilter } from '../../../components/Auth/SearchFilter';
import api from '../../../services/api';
import { AuthContext } from '../../../contexts/auth';

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

export default function Customer() {
  const [customers, setCustomers] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  // const [limit, setLimit] = useState(5);
  const limit = 10;
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    async function loadCustomers() {
      // const user = JSON.parse(localStorage.getItem('@App:user'));

      const response = await api.get(
        `/customers?page=${currentPage}&limit=${limit}&user_referral=${authenticated.user.referral_code}`
      );

      setTotal(response.data.totalResults);
      const totalPages = Math.ceil(total / limit);

      const arrPages = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
      }

      setPages(arrPages);
      setCustomers(response.data.customers);

      if (search) {
        const filters = await api.get(
          `/customers?filter=${search.toLowerCase()}&page=${currentPage}&limit=${limit}&user_referral=${
            authenticated.user.referral_code
          }`
        );
        setCustomers(filters.data.customers);
      }
    }

    loadCustomers();
  }, [currentPage, total, search]);

  return (
    <Container>
      <Header>
        <strong>Clientes</strong>
        <Link to="customer/create">
          <FiPlusCircle />
          <span>Novo</span>
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
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>
                  <Actions>
                    <Link to={`customer/edit/${customer.id}`}>
                      <FiEdit size="24" />
                    </Link>
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
