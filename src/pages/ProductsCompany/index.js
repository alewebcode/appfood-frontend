import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import Modal from 'react-modal';

import { Content, Container, Logo, ListItems, ProductInfo } from './styles';
import api from '../../services/api';
import { CartContext } from '../../contexts/cart';

export default function ProductsCompany() {
  const { addCart } = useContext(CartContext);
  const location = useLocation();
  const [company, setCompany] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const uploads = 'http://192.168.0.102:3333/uploads';

  useEffect(() => {
    setCompany(location.company);
    async function loadProducts() {
      const response = await api.get(
        `/coupons/products/${location.company.id}`
      );

      setCoupons(response.data);
      setIsLoaded(true);
    }

    loadProducts();
  }, []);
  function handleAddToCart(product) {
    product.company = company.id;
    addCart(product);
  }

  return (
    <Container>
      <Content>
        <h1>{company.name}</h1>
        <Logo>
          <img src={`${uploads}/${company.logo}`} alt="logo" />
        </Logo>
        <ListItems>
          {!isLoaded ? (
            <p>Carregando...</p>
          ) : (
            coupons.map(coupon => (
              <div key={coupon.id}>
                {/* <Link to="/#/" onClick={OpenAddProductModal}> */}
                <ProductInfo>
                  <h1>{coupon.product.name}</h1>
                  <span>{coupon.product.description}</span>
                  <h6>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(coupon.product.price)}
                  </h6>
                  <p>
                    <span>Cupom</span>
                    {coupon.coupon_code} |
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(coupon.amount)}
                  </p>
                </ProductInfo>

                <img src={`${uploads}/${coupon.product.image}`} alt="product" />

                <button type="button" onClick={() => handleAddToCart(coupon)}>
                  Adicionar
                </button>
                {/* </Link> */}
              </div>
            ))
          )}
        </ListItems>
      </Content>
    </Container>
  );
}
