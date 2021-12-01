import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi';
import PropTypes from 'prop-types';
import {
  Cart,
  CartItems,
  CartItem,
  CartFooter,
  Subtotal,
  Total,
  Desconto,
  EmptyBag,
} from './styles';
import { CartContext } from '../../contexts/cart';
import { formatPrice } from '../../util/format';
import empty_bag from '../../assets/empty_bag.png';

export function CartPreview({ openCart }) {
  const { cart, removeFromCart } = useContext(CartContext);
  const cartSize = Object.keys(cart).length;

  const totalSoma = Object.keys(cart).reduce((total, index) => {
    total += Number(cart[index].product_price); // Number(cart[index].product.price);

    return total;
  }, 0);

  const totalDesconto = Object.keys(cart).reduce((total, index) => {
    total += Number(cart[index].coupon_amount);

    return total;
  }, 0);

  function handleRemoveProduct(product) {
    removeFromCart(product);
  }
  return (
    <Cart openCart={openCart}>
      <div className="close">X</div>
      {openCart && cartSize > 0 ? (
        <>
          <CartItems>
            {Object.keys(cart).map(product => (
              <>
                <h6>Cupom {cart[product].product_code}</h6>
                <CartItem key={cart[product].product_id}>
                  <p>{cart[product].product_name}</p>
                  <p>{formatPrice(cart[product].product_price)}</p>
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveProduct(cart[product].product_id)
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
            <button type="button">
              <Link to="/checkout">Finalizar pedido</Link>
            </button>
          </CartFooter>
        </>
      ) : (
        <EmptyBag>
          <p>Sua sacola está vazia!</p>
          <img src={empty_bag} alt="empty bag" />
        </EmptyBag>
      )}
    </Cart>
  );
}
CartPreview.defaultProps = {
  openCart: false,
};
CartPreview.propTypes = {
  openCart: PropTypes.bool,
};
