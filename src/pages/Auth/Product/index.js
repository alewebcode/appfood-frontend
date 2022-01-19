import React, { useEffect, useState, useContext } from 'react';
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
import { formatPrice } from '../../../util/format';

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
import { AuthContext } from '../../../contexts/auth';

export default function Product() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const { authenticated } = useContext(AuthContext);
  const limit = 10;

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(
        `/products?page=${currentPage}&limit=${limit}&referral_code=${authenticated.user.referral_code}`
      );

      setTotal(response.data.totalResults);
      const totalPages = Math.ceil(total / limit);

      const arrPages = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
      }

      setPages(arrPages);
      setProducts(response.data.products);

      if (search) {
        const filters = await api.get(
          `/products?filter=${search.toLowerCase()}&page=${currentPage}&limit=${limit}&referral_code=${
            authenticated.user.referral_code
          }`
        );
        setProducts(filters.data.products);
      }
    }

    loadProducts();
  }, [search]);

  async function deleteProduct(id) {
    const index = products.findIndex(element => element.id === id);

    await api.delete(`/products/${id}`);

    setProducts(products.splice(index));

    toast.success('Excluído com sucesso');

    history.push('/auth/products');
  }

  return (
    <Container>
      <Header>
        <strong>Produtos</strong>
        <Link to="product/create">
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
              <th>Descrição</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{formatPrice(product.price)}</td>
                <td>
                  <Actions>
                    <Link to={`product/edit/${product.id}`}>
                      <FiEdit size="24" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteProduct(product.id)}
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
