import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiShoppingBag, FiUser } from 'react-icons/fi';
import { Ul, Cart, User, MenuActionUser } from './styles';
import { UserMenu } from '../../UserMenu';
import { AuthContext } from '../../../contexts/auth';
import { CartContext } from '../../../contexts/cart';
import { CartPreview } from '../../CartPreview';

export function LeftNav({ open, close }) {
  const { cart, isCartOpen } = useContext(CartContext);
  const { authenticated } = useContext(AuthContext);
  const [openMenuUser, setOpenMenuUser] = useState(false);
  const [openCart, setOpenCart] = useState(isCartOpen);
  // eslint-disable-next-line no-unused-vars
  const [openMenu, setOpenMenu] = useState(open);
  const cartSize = Object.keys(cart).length;
  const ref = useRef(null);
  const ref2 = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenMenuUser(false);
    }
    if (ref2.current && !ref2.current.contains(event.target)) {
      setOpenCart(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [open]);

  function handleOpenMenuUser(e) {
    e.preventDefault();

    setOpenMenuUser(!openMenuUser);
  }
  function handleOpenCart(e) {
    e.preventDefault();
    setOpenCart(!openCart);
  }
  // function handleCloseMenu() {
  //   open.closeMenu();
  // }

  return (
    <>
      <Ul open={open}>
        <li>
          <Link to="/about" onClick={() => close()}>
            <strong>SOBRE </strong>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => close()}>
            <strong>CONTATO</strong>
          </Link>
        </li>
        <li>
          <Link to="/loja" onClick={() => close()}>
            <strong>LOJA</strong>
          </Link>
        </li>
        {/* <li>
          <Cart onClick={handleOpenCart}>
            <FiShoppingBag size={24} />
            {cartSize > 0 && <span>{cartSize}</span>}
            <CartPreview />
          </Cart>
        </li> */}
        {/* <li>
          {authenticated && (
            <User>
              <FiUser size={24} onClick={handleOpenMenuUser} />
              <UserMenu openMenuUser={openMenuUser} />
            </User>
          )}
        </li> */}
      </Ul>
      <MenuActionUser>
        <Cart onClick={handleOpenCart} ref={ref2}>
          <FiShoppingBag size={24} />
          {cartSize > 0 && <span>{cartSize}</span>}
          <CartPreview openCart={openCart} />
        </Cart>

        {authenticated && (
          <User onClick={handleOpenMenuUser} ref={ref}>
            <FiUser size={24} />
            <UserMenu openMenuUser={openMenuUser} />
          </User>
        )}
      </MenuActionUser>

      {!authenticated && (
        <Link to="/login">
          <button type="button">Entrar</button>
        </Link>
      )}
    </>
  );
}

LeftNav.defaultProps = {
  open: false,
  close: null,
};

LeftNav.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
};
