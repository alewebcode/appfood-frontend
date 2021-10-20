import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiEdit2, FiShare2, FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../contexts/auth';

import { Menu, Header } from './styles';

export function UserMenu({ openMenuUser }) {
  const { authenticated, logout } = useContext(AuthContext);

  async function handleLogout() {
    logout();
  }

  return (
    <Menu openMenuUser={openMenuUser}>
      <nav>
        <Header>Olá, {authenticated.user.name}</Header>
        <ul>
          <li>
            <Link to="/orders">
              <FiFileText size={18} />

              <span>Meus pedidos</span>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <FiEdit2 size={18} />

              <span>Editar dados</span>
            </Link>
          </li>
          <li>
            <Link to="/auth/referrals">
              <FiShare2 size={18} />

              <span>Indicar cliente</span>
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
