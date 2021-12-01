import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiShare2, FiLogOut, FiLayout } from 'react-icons/fi';
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
            <Link to="/auth/referrals">
              <FiShare2 size={18} />

              <span>Indicar cliente</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiLayout size={18} />

              <span>Acessar Site</span>
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
