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
  const [segments, setSegments] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  // const [limit, setLimit] = useState(5);
  const limit = 10;

  useEffect(() => {
    async function loadSegments() {
      const response = await api.get(
        `/segments?page=${currentPage}&limit=${limit}`
      );

      setTotal(response.data.totalResults);
      const totalPages = Math.ceil(total / limit);

      const arrPages = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
      }

      setPages(arrPages);
      setSegments(response.data.segments);

      if (search) {
        const filters = await api.get(
          `/segments?filter=${search.toLowerCase()}&page=${currentPage}&limit=${limit}`
        );
        setSegments(filters.data.segments);
      }
    }

    loadSegments();
  }, [currentPage, total, search]);

  async function deleteSegment(id) {
    await api.delete(`/segments/${id}`);

    const listSegments = segments.filter(element => element.id !== id);

    setSegments(listSegments);

    toast.success('Excluído com sucesso');

    history.push('/auth/segments');
  }

  return (
    <Container>
      <Header>
        <strong>Segmentos</strong>
        <Link to="segment/create">
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
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {segments.map(segment => (
              <tr key={segment.id}>
                <td>{segment.name}</td>
                <td>{segment.description}</td>
                <td>
                  <Actions>
                    <Link to={`segment/edit/${segment.id}`}>
                      <FiEdit size="24" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteSegment(segment.id)}
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
