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
import { SearchFilter } from '../../../components/Auth/SearchFilter';
import api from '../../../services/api';

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

export default function Segment() {
  const history = useHistory();
  const [salesmans, setSalesmans] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  // const [limit, setLimit] = useState(5);
  const limit = 10;

  useEffect(() => {
    async function loadSalesmans() {
      const response = await api.get(
        `/salesmans?page=${currentPage}&limit=${limit}`
      );

      setTotal(response.data.totalResults);
      const totalPages = Math.ceil(total / limit);

      const arrPages = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
      }

      setPages(arrPages);
      setSalesmans(response.data.salesmans);

      if (search) {
        const filters = await api.get(
          `/salesmans?filter=${search.toLowerCase()}&page=${currentPage}&limit=${limit}`
        );
        setSalesmans(filters.data.salesmans);
      }
    }

    loadSalesmans();
  }, [currentPage, total, search]);

  async function deleteSalesman(id) {
    await api.delete(`/salesmans/${id}`);

    const listSalesmans = salesmans.filter(element => element.id !== id);

    setSalesmans(listSalesmans);

    toast.success('Excluído com sucesso');

    history.push('/auth/salesmans');
  }

  return (
    <Container>
      <Header>
        <strong>Vendedores</strong>
        <Link to="salesman/create">
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
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {salesmans.map(salesman => (
              <tr key={salesman.id}>
                <td>{salesman.name}</td>
                <td>{salesman.phone}</td>
                <td>{salesman.email}</td>
                <td>
                  <Actions>
                    <Link to={`salesman/edit/${salesman.id}`}>
                      <FiEdit size="24" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteSalesman(salesman.id)}
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
