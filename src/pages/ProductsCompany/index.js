import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Content, Container, Logo, ListItems, ProductInfo } from './styles';
import api from '../../services/api';

export default function ProductsCompany() {
  const location = useLocation();
  const [company, setCompany] = useState([]);
  const [coupons, setCoupons] = useState([]);
  // const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // const uploads = 'http://192.168.0.102:3333/uploads';
  const uploads = 'https://appfood-backend.herokuapp.com/uploads';

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

    // console.log(company);
  }, []);

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
                    {coupon.coupon_code} |{' '}
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(coupon.amount)}
                  </p>
                </ProductInfo>

                <img src={`${uploads}/${coupon.product.image}`} alt="product" />
              </div>
            ))
          )}
        </ListItems>
      </Content>
    </Container>
  );
}
