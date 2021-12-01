import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiFileText,
  FiEdit2,
  FiShare2,
  FiDollarSign,
  FiLogOut,
  FiSettings,
} from 'react-icons/fi';
import PropTypes from 'prop-types';
import { AuthContext } from '../../contexts/auth';

import { Menu, Header } from './styles';

export function UserMenu({ openMenuUser }) {
  const { authenticated, logout } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(openMenuUser);

  useEffect(() => {
    setOpenMenu(openMenuUser);
  }, [openMenuUser]);

  async function handleLogout() {
    logout();
  }
  function handleCloseMenuUser() {
    // e.preventDefault();
    setOpenMenu(!openMenuUser);
    openMenuUser = false;
  }

  return (
    <Menu openMenuUser={openMenu}>
      <nav>
        {/* <div>
          <button type="button" className="close" onClick={handleCloseMenuUser}>
            X
          </button>
        </div> */}
        <Header>Olá, {authenticated.user.name}</Header>
        <ul>
          <li>
            <Link to="/orders" onClick={handleCloseMenuUser}>
              <FiFileText size={18} />

              <span>Meus pedidos</span>
            </Link>
          </li>
          <li>
            <Link to="/account" onClick={handleCloseMenuUser}>
              <FiEdit2 size={18} />

              <span>Editar dados</span>
            </Link>
          </li>
          <li>
            <Link to="/indicar-amigo" onClick={handleCloseMenuUser}>
              <FiShare2 size={18} />

              <span>Indicar um amigo</span>
            </Link>
          </li>
          <li>
            <Link to="/moeda-virtual" onClick={handleCloseMenuUser}>
              <FiDollarSign size={18} />

              <span>Moeda virtual</span>
            </Link>
          </li>
          <li>
            <Link to="auth/dashboard">
              <FiSettings size={18} />

              <span>Acessar sistema</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              <FiLogOut size={18} />

              <span>Sair</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Menu>
  );
}
UserMenu.defaultProps = {
  openMenuUser: false,
};
UserMenu.propTypes = {
  openMenuUser: PropTypes.bool,
};
