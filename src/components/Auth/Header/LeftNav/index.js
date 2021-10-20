import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';
import { Tooltip, TooltipMenu, DropDownList, Ul, MenuUser } from './styles';
import { UserMenu } from '../../UserMenu';

export function LeftNav({ open }) {
  const [openDropDownCompany, setOpenDropDownCompany] = useState(false);
  const [openDropDownProduct, setOpenDropDownProduct] = useState(false);
  const [openMenuUser, setOpenMenuUser] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  // const product_ref = useRef('');
  // const company_ref = useRef('');

  function handleClickOpenProduct(e) {
    e.preventDefault();

    setActiveMenu('products');
    setOpenDropDownProduct(!openDropDownProduct);
  }
  function handleClickOpenCompany(e) {
    e.preventDefault();

    setActiveMenu('company');
    setOpenDropDownCompany(!openDropDownCompany);
  }
  function handleOpenMenuUser() {
    setOpenMenuUser(!openMenuUser);
  }

  return (
    <>
      <Ul open={open}>
        <li>
          <Link to="/auth/dashboard">
            <strong>Dashboard</strong>
          </Link>
        </li>
        <Tooltip onClick={handleClickOpenCompany} id="company">
          <Link to="!#" onClick={handleClickOpenCompany} id="company">
            <strong>Empresa</strong>
            <span>
              <FiChevronDown />
            </span>
          </Link>

          <TooltipMenu
            openDropDown={openDropDownCompany && activeMenu === 'company'}
          >
            <DropDownList>
              <li>
                <Link to="/auth/companies">
                  <strong>Listar empresas</strong>
                </Link>
              </li>
              <li>
                <Link to="/auth/segments">
                  <strong>Segmentos</strong>
                </Link>
              </li>
            </DropDownList>
          </TooltipMenu>
        </Tooltip>
        <Tooltip onClick={handleClickOpenProduct} id="products">
          <Link to="!#" onClick={handleClickOpenProduct} id="products">
            <strong>Produtos</strong>
            <span>
              <FiChevronDown />
            </span>
          </Link>

          <TooltipMenu
            openDropDown={openDropDownProduct && activeMenu === 'products'}
          >
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
        <li>
          <Link to="/auth/orders">
            <strong>Pedidos</strong>
          </Link>
        </li>
        <li>
          <Link to="/auth/customers">
            <strong>Clientes</strong>
          </Link>
        </li>
      </Ul>
      <MenuUser onClick={handleOpenMenuUser}>
        {/* <span> */}
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          alt=""
          height="40"
          width="40"
        />
        <UserMenu openMenuUser={openMenuUser} />
        {/* </span> */}
      </MenuUser>
    </>
  );
}

LeftNav.defaultProps = {
  open: false,
};

LeftNav.propTypes = {
  open: PropTypes.bool,
};
