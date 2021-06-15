import React from 'react';
import { Link } from 'react-router-dom';
import {
  // BootomSide,
  Container,
  Content,
  NavMenu,
  Tooltip,
  TooltipMenu,
  DropDownList,
} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <h2>Logo</h2>
        <NavMenu>
          <ul>
            <li>
              <Link to="/auth/dashboard">
                <strong>Dashboard</strong>
              </Link>
            </li>
            <Tooltip>
              <Link to="/auth/companies">
                <strong>Empresa</strong>
              </Link>

              <TooltipMenu>
                <DropDownList>
                  <li>
                    <Link to="/auth/segments">
                      <strong>Segmentos</strong>
                    </Link>
                  </li>
                </DropDownList>
              </TooltipMenu>
            </Tooltip>
            <Tooltip>
              <Link to="/auth/products">
                <strong>Produtos</strong>
              </Link>

              <TooltipMenu>
                <DropDownList>
                  <li>
                    <Link to="/auth/categories">
                      <strong>Categorias</strong>
                    </Link>
                  </li>
                </DropDownList>
              </TooltipMenu>
            </Tooltip>
          </ul>
        </NavMenu>
      </Content>
    </Container>
  );
}
