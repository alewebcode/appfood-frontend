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

export default function Coupon() {
  const history = useHistory();
  const [coupons, setCoupons] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  // const [limit, setLimit] = useState(5);
  const limit = 10;

  useEffect(() => {
    async function loadCoupons() {
      const response = await api.get(
        `/coupons?page=${currentPage}&limit=${limit}`
      );

      setTotal(response.data.totalResults);
      const totalPages = Math.ceil(total / limit);

      const arrPages = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
      }

      setPages(arrPages);
      setCoupons(response.data.coupons);

      if (search) {
        const filters = await api.get(
          `/coupons?filter=${search.toLowerCase()}&page=${currentPage}&limit=${limit}`
        );
        setCoupons(filters.data.coupons);
      }
    }

    loadCoupons();
  }, [currentPage, total, search]);

  async function deleteCoupons(id) {
    await api.delete(`/coupons/${id}`);

    const listCoupons = coupons.filter(element => element.id !== id);

    setCoupons(listCoupons);

    toast.success('Excluído com sucesso');

    history.push('/auth/coupons');
  }

  return (
    <Container>
      <Header>
        <strong>Cupons</strong>
        <Link to="coupon/create">
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
              <th>Código cupom</th>
              <th>Descrição</th>
              <th>Valor</th>

              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map(coupon => (
              <tr key={coupon.id}>
                <td>{coupon.coupon_code}</td>
                <td>{coupon.description}</td>
                <td>{coupon.amount}</td>

                <td>
                  <Actions>
                    <Link to={`coupon/edit/${coupon.id}`}>
                      <FiEdit size="24" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteCoupons(coupon.id)}
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
