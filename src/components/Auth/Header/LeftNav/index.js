import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';
import { Tooltip, TooltipMenu, DropDownList, Ul } from './styles';

export function LeftNav({ open }) {
  const [openDropDown, setOpenDropDown] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setOpenDropDown(!openDropDown);

    // console.log(openDropDown);
  }
  return (
    <Ul open={open}>
      <li>
        <Link to="/auth/dashboard">
          <strong>Dashboard</strong>
        </Link>
      </li>
      <Tooltip>
        <Link to="/auth/companies">
          <strong>Empresa</strong>
          <span>
            <FiChevronDown />
          </span>
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
      <Tooltip onClick={handleClick}>
        <Link to="!#" onClick={handleClick}>
          <strong>Produtos</strong>
          <span>
            <FiChevronDown />
          </span>
        </Link>

        <TooltipMenu openDropDown={openDropDown}>
          <DropDownList>
            <li>
              <Link to="/auth/products">
                <strong>Listar produtos</strong>
              </Link>
            </li>
            <li>
              <Link to="/auth/categories">
                <strong>Categorias</strong>
              </Link>
            </li>
          </DropDownList>
        </TooltipMenu>
      </Tooltip>
      <li>
        <Link to="/auth/salesmans">
          <strong>Vendedores</strong>
        </Link>
      </li>
      <li>
        <Link to="/auth/coupons">
          <strong>Cupons</strong>
        </Link>
      </li>
      <li>
        <Link to="/auth/users">
          <strong>Usuários</strong>
        </Link>
      </li>
    </Ul>
  );
}

LeftNav.defaultProps = {
  open: false,
};

LeftNav.propTypes = {
  open: PropTypes.bool,
};
