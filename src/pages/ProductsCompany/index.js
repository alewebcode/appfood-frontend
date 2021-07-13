import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Content, Container, Logo, ListItems, ProductInfo } from './styles';
import api from '../../services/api';

export default function ProductsCompany() {
  const location = useLocation();
  const [company, setCompany] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const uploads = 'http://192.168.0.102:3333/uploads';

  useEffect(() => {
    setCompany(location.company);

    async function loadProducts() {
      const response = await api.get(
        `/products/companies/${location.company.id}`
      );

      setProducts(response.data);
      setIsLoaded(true);
    }

    loadProducts();
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
            products.map(product => (
              <div key={product.id}>
                <ProductInfo>
                  <h1>{product.name}</h1>
                  <span>{product.description}</span>
                  <h6>R$ {product.price}</h6>
                  <p>Cupom Burguer | R$ 10,00</p>
                </ProductInfo>

                <img src={`${uploads}/${product.image}`} alt="product" />
              </div>
            ))
          )}
        </ListItems>
      </Content>
    </Container>
  );
}
