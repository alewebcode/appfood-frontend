import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiShoppingBag, FiUser } from 'react-icons/fi';
import { Ul, Cart, User } from './styles';
import { UserMenu } from '../../UserMenu';
import { AuthContext } from '../../../contexts/auth';
import { CartContext } from '../../../contexts/cart';
import { CartPreview } from '../../CartPreview';

export function LeftNav({ open }) {
  const { cart, cartPopUp } = useContext(CartContext);
  const { authenticated } = useContext(AuthContext);
  const [openMenuUser, setOpenMenuUser] = useState(false);
  const [openMenu, setOpenMenu] = useState(open);
  const cartSize = Object.keys(cart).length;
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenMenuUser(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  function handleOpenMenuUser(e) {
    e.preventDefault();

    setOpenMenuUser(!openMenuUser);
  }
  function handleOpenCart(e) {
    e.preventDefault();
    cartPopUp();
  }
  function handleCloseMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <Ul open={openMenu}>
        <li>
          <Link to="/about" onClick={handleCloseMenu}>
            <strong>SOBRE </strong>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleCloseMenu}>
            <strong>CONTATO</strong>
          </Link>
        </li>
        <li>
          <Link to="/loja" onClick={handleCloseMenu}>
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
      <Cart onClick={handleOpenCart}>
        <FiShoppingBag size={24} />
        {cartSize > 0 && <span>{cartSize}</span>}
        <CartPreview />
      </Cart>

      {authenticated && (
        <User ref={ref}>
          <FiUser size={24} onClick={handleOpenMenuUser} />
          <UserMenu openMenuUser={openMenuUser} />
        </User>
      )}

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
};

LeftNav.propTypes = {
  open: PropTypes.bool,
};
