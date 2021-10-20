import React, { useEffect, useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import {
  FiEye,
  FiChevronRight,
  FiChevronLeft,
  FiXCircle,
  FiCheckSquare,
} from 'react-icons/fi';
// import { toast } from 'react-toastify';
import { parseISO, format } from 'date-fns';
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { SearchFilter } from '../../../components/Auth/SearchFilter';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import 'react-toastify/dist/ReactToastify.min.css';
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
  CloseButton,
  TableDetail,
  // ProductItems,
  // Product,
  // ProductInfo,
  // ProductItem,
} from './styles';
import { AuthContext } from '../../../contexts/auth';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    width: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Order() {
  const [ordersItems, setOrdersItems] = useState([]);
  const [openDetail, setOpenDetail] = useState(false);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const { authenticated } = useContext(AuthContext);
  const limit = 10;

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get(
        `/orders?page=${currentPage}&limit=${limit}&referral_code=${authenticated.user.referral_code}`
      );

      setTotal(response.data.totalResults);
      const totalPages = Math.ceil(total / limit);

      const arrPages = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
      }

      setPages(arrPages);
      setOrders(response.data.orders);

      if (search) {
        const filters = await api.get(
          `/orders?filter=${search.toLowerCase()}&page=${currentPage}&limit=${limit}&referral_code=${
            authenticated.user.referral_code
          }`
        );
        setOrders(filters.data.orders);
      }
    }

    loadOrders();
  }, [currentPage, total, search]);

  function closeOrderDetail() {
    setOpenDetail(false);
  }
  function handleCloseModal() {
    setOpenDetail(false);
  }

  async function handleCancelOrder(order) {
    try {
      await api.put(`/orders/cancel/${order}`);
      toast.success('Pedido cancelado com sucesso');
    } catch (err) {
      toast.danger('Não foi possível cancelar');
    }
  }
  async function handleApproveOrder(order) {
    try {
      await api.put(`/orders/approve/${order}`);
      toast.success('Pedido aprovado com sucesso');
    } catch (err) {
      toast.danger('Não foi possível cancelar');
    }
  }
  async function handleViewOrder(order) {
    setOpenDetail(true);
    const response = await api.get(`/orders/${order}/detail`);

    // const resp = response.data.find(data => data.id === order);
    setOrdersItems(response.data);
  }

  return (
    <Container>
      <Header>
        <strong>Pedidos</strong>
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
              <th>Código</th>
              <th>Data/Hora</th>
              <th>Status</th>
              <th>Cliente</th>
              <th>Valor</th>
              <th>Tipo entrega</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{format(parseISO(order.date), 'dd/MM/yyyy HH:mm')}</td>
                <td>{order.status}</td>
                <td>{order.user.name}</td>
                <td>{formatPrice(order.amount)}</td>
                <td>{order.delivery ? 'Entrega' : 'Retirada'}</td>

                <td>
                  <Actions>
                    <button
                      data-tip
                      data-for="registerView"
                      className="buttonView"
                      type="button"
                      onClick={() => handleViewOrder(order.id)}
                    >
                      <FiEye size="24" />
                    </button>
                    <button
                      data-tip
                      data-for="registerCancel"
                      className="buttonCancel"
                      type="button"
                      onClick={() => handleCancelOrder(order.id)}
                    >
                      <FiXCircle size="24" />
                    </button>
                    <ReactTooltip
                      id="registerCancel"
                      place="top"
                      effect="solid"
                    >
                      Cancelar pedido
                    </ReactTooltip>
                    {order.status === 'Aguardando' ? (
                      <button
                        data-tip
                        data-for="registerApprove"
                        className="buttonApprove"
                        type="button"
                        onClick={() => handleApproveOrder(order.id)}
                      >
                        <FiCheckSquare size="24" />
                      </button>
                    ) : (
                      ''
                    )}

                    <ReactTooltip
                      id="registerApprove"
                      place="top"
                      effect="solid"
                    >
                      Aprovar pedido
                    </ReactTooltip>
                  </Actions>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal
          isOpen={openDetail}
          onRequestClose={closeOrderDetail}
          ariaHideApp={false}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <CloseButton type="button" onClick={handleCloseModal}>
            X
          </CloseButton>
          <TableDetail>
            <thead>
              <tr>
                <th>Cupom</th>
                <th>Produto</th>
                <th>Valor</th>
                <th>Desconto</th>
              </tr>
            </thead>
            <tbody>
              {ordersItems.map(item => (
                <>
                  <tr key={item.id}>
                    <td data-label="Cupom">{item.coupon.coupon_code}</td>
                    <td data-label="Produto">{item.product.name}</td>
                    <td data-label="Valor">
                      <span className="amount">
                        {formatPrice(item.product.price)}
                      </span>
                    </td>
                    <td data-label="Desconto">
                      <span className="discount">
                        {formatPrice(item.coupon.amount)}
                      </span>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </TableDetail>
          {/* <ProductItems>
            {ordersItems.map(item => (
              <Product key={item.id}>
                <ProductItem>
                  <ProductInfo>
                    <span className="coupon">
                      Cupom {item.coupon.coupon_code}
                    </span>
                    <span>{item.product.name}</span>
                    <span>{item.product.price}</span>
                    <span className="discount"> - {item.coupon.amount}</span>
                  </ProductInfo>

               
                </ProductItem>
              </Product>
            ))}
          </ProductItems> */}
        </Modal>
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
