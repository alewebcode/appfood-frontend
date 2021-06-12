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

export default function Category() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState('');
  // const [limit, setLimit] = useState(5);
  const limit = 5;

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get(
        `/categories?page=${currentPage}&limit=${limit}`
      );

      setTotal(response.data.totalResults);
      const totalPages = Math.ceil(total / limit);

      const arrPages = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
      }

      setPages(arrPages);
      setCategories(response.data.categories);

      if (search) {
        const filters = await api.get(
          `/categories?filter=${search.toLowerCase()}&page=${currentPage}&limit=${limit}`
        );
        setCategories(filters.data.categories);
      }
    }

    loadCategories();
  }, [currentPage, total, search]);

  async function deleteCategory(id) {
    await api.delete(`/categories/${id}`);

    const listCategories = categories.filter(element => element.id !== id);

    setCategories(listCategories);

    toast.success('Excluído com sucesso');

    history.push('/auth/segments');
  }

  return (
    <Container>
      <Header>
        <strong>Categorias</strong>
        <Link to="category/create">
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
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>
                  <Actions>
                    <Link to={`category/edit/${category.id}`}>
                      <FiEdit size="24" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteCategory(category.id)}
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
