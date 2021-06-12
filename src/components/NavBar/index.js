import React from 'react';
import { Link } from 'react-router-dom';

import { Content } from './styles';

export function NavBar() {
  return (
    <Content>
      <h2>Logo</h2>
      <nav>
        <ul>
          <li>
            <Link to="/about">
              <strong>SOBRE</strong>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <strong>CONTATO</strong>
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/login">
        <button type="button">Entrar</button>
      </Link>
    </Content>
  );
}
