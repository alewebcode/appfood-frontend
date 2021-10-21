import React, { useEffect, useContext, useState } from 'react';
// import { useLocation, Link } from 'react-router-dom';

import { parseISO, format } from 'date-fns';

import Modal from 'react-modal';
import {
  Content,
  Container,
  Order,
  Detail,
  ContentOrder,
  ProductItems,
  Product,
  ProductInfo,
  CloseButton,
} from './styles';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';
import { formatPrice } from '../../util/format';

// const uploads = 'http://192.168.0.102:3333/uploads';
const uploads = 'https://appfood-backend.herokuapp.com/uploads';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function UserOrders() {
  const { authenticated } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [ordersItems, setOrdersItems] = useState([]);

  const [openDetail, setOpenDetail] = useState(false);

  useEffect(() => {
    async function loadOrders() {
      const customer = authenticated.user.id;

      const response = await api.get(`/customers/${customer}/orders`);

      setOrders(response.data);
    }
    loadOrders();
  }, []);

  async function handleOrderDetail(order) {
    setOpenDetail(true);
    const response = await api.get(`/orders/${order}/detail`);

    setOrdersItems(response.data);
  }
  function closeOrderDetail() {
    setOpenDetail(false);
  }
  function handleCloseModal() {
    setOpenDetail(false);
  }

  return (
    <>
      <Container>
        <Content>
          <title>Meus pedidos</title>
          {orders.map(order => (
            <Order>
              <div className="header">Pedido #{order.id}</div>
              <ContentOrder>
                <Detail>
                  <span>
                    <strong>Data e hora do pedido: </strong>

                    {format(parseISO(order.date), 'dd/MM/yyyy HH:mm')}
                  </span>
                  <span>
                    <strong>Total pago:</strong> {formatPrice(order.amount)}
                  </span>
                  <span>
                    <strong>Status:</strong> {order.status}
                  </span>
                </Detail>
                <button
                  type="button"
                  onClick={() => handleOrderDetail(order.id)}
                >
                  Ver detalhe
                </button>
              </ContentOrder>
            </Order>
          ))}
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
            <ProductItems>
              {ordersItems.map(item => (
                <Product key={item.id}>
                  <img src={`${uploads}/${item.product.image}`} alt="product" />

                  <ProductInfo>
                    <span>{item.product.name}</span>

                    <span>{item.product.description}</span>
                    <span>
                      {item.product.price}
                      <span className="coupon">
                        Cupom {item.coupon.coupon_code}
                      </span>
                    </span>
                  </ProductInfo>
                </Product>
              ))}
            </ProductItems>
          </Modal>
        </Content>
      </Container>
    </>
  );
}
