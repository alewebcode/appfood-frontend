import React, { useContext, useState, useEffect } from 'react';

import { FiTrash, FiCheckCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import {
  Cart,
  CartItems,
  CartItem,
  CartFooter,
  Subtotal,
  Total,
  Desconto,
  Container,
  Content,
  TypeDelivery,
  BoxPickUp,
  Delivery,
  MessageSuccess,
} from './styles';

import { CartContext } from '../../contexts/cart';
import { AuthContext } from '../../contexts/auth';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import Loading from '../../components/Loading';

export default function Checkout() {
  const [typeDelivery, setTypeDelivery] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [statusMsg, setStatusMsg] = useState(undefined);
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const { authenticated } = useContext(AuthContext);
  const cartSize = Object.keys(cart).length;

  const history = useHistory();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
    if (!authenticated) {
      history.push('/login');
    }
  }, [loading]);

  const totalSoma = Object.keys(cart).reduce((total, index) => {
    total += Number(cart[index].product_price);

    return total;
  }, 0);

  const totalDesconto = Object.keys(cart).reduce((total, index) => {
    // console.log(cart[index]);
    total += Number(cart[index].coupon_amount);

    return total;
  }, 0);

  function handleRemoveProduct(product) {
    removeFromCart(product);
  }
  async function handleCheckout() {
    setIsLoading(true);
    const amount = totalSoma - totalDesconto;
    const delivery = typeDelivery === 1;
    const status = 'Aguardando';
    const items = Object.keys(cart).map(key => cart[key]);
    const customer = authenticated.user.id;

    const response = await api.get(`/products/${items[0].product_id}`);
    const company = response.data.company.id;

    const data = { amount, delivery, status, customer, items, company };

    try {
      await api.post('/orders', data);
      await api.post('/orders/sendMailNewOrder', data);
      localStorage.removeItem('@App:cart');
      clearCart();
      setMessage(true);
      setStatusMsg({ type: 'success' });
    } catch (err) {
      setIsLoading(false);
      setStatusMsg({ type: 'error' });
      // toast.danger('Não foi possível efetuar o cadastro');
    }
  }
  return (
    <Container>
      <Content>
        <title>Checkout</title>
        <div className="box_checkout">
          {loading ? (
            <Loading loading={loading} />
          ) : (
            <>
              {message ? (
                <>
                  {statusMsg?.type === 'success' && (
                    <MessageSuccess>
                      <FiCheckCircle size={45} />
                      <p>Pedido realizado com sucesso</p>
                    </MessageSuccess>
                  )}
                  {statusMsg?.type === 'error' && (
                    <h1>Não foi possivel realizar o pedido</h1>
                  )}
                </>
              ) : (
                <>
                  <TypeDelivery>
                    <BoxPickUp>
                      <label htmlFor="delivery">
                        <input
                          type="radio"
                          name="type_delivery"
                          value="1"
                          onChange={e => setTypeDelivery(e.target.value)}
                        />{' '}
                        Entrega
                      </label>
                    </BoxPickUp>
                    <Delivery>
                      <label htmlFor="delivery">
                        <input
                          type="radio"
                          name="type_delivery"
                          value="2"
                          onChange={e => setTypeDelivery(e.target.value)}
                        />{' '}
                        Retirar no local
                      </label>
                    </Delivery>
                  </TypeDelivery>
                  <Cart>
                    <h1>Pedido</h1>

                    <CartItems>
                      {cartSize > 0 &&
                        Object.keys(cart).map(coupon => (
                          <>
                            <h6>Cupom {cart[coupon].coupon_code}</h6>
                            <CartItem key={cart[coupon].product_id}>
                              <p>{cart[coupon].product_name}</p>
                              <p>{formatPrice(cart[coupon].product_price)}</p>
                              <button
                                type="button"
                                onClick={() =>
                                  handleRemoveProduct(cart[coupon].id)
                                }
                              >
                                <FiTrash size={24} />
                              </button>
                            </CartItem>
                          </>
                        ))}
                    </CartItems>
                    <CartFooter>
                      <Subtotal>
                        <p>Subtotal</p>
                        <p>{formatPrice(totalSoma)}</p>
                      </Subtotal>
                      <Desconto>
                        <p>Desconto</p>
                        <p>{formatPrice(totalDesconto)}</p>
                      </Desconto>
                      <Total>
                        <p>Total</p>
                        <p>{formatPrice(totalSoma - totalDesconto)}</p>
                      </Total>
                      <button type="button" onClick={handleCheckout}>
                        Finalizar pedido
                      </button>
                    </CartFooter>
                  </Cart>
                </>
              )}
            </>
          )}
        </div>
      </Content>
    </Container>
  );
}
