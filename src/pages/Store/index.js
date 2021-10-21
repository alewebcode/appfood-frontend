import React, { useEffect, useState, useContext } from 'react';

// import Select from './Select';
import { CartContext } from '../../contexts/cart';
import { Content, Container, Form, ListItems, ProductInfo } from './styles';
import { SearchFilter } from './SearchFilter';
import api from '../../services/api';
import Loading from '../../components/Loading';

export default function Store() {
  const { addCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setIsLoading] = useState(false);
  // const uploads = 'http://192.168.0.103:3333/uploads';
  const uploads = 'https://appfood-backend.herokuapp.com/uploads';

  useEffect(() => {
    async function loadStore() {
      const response = await api.get(`/loja`);

      setProducts(response.data);

      if (search) {
        setIsLoading(true);

        const filters = await api.get(
          `/loja?filterProductCompany=${search.toLowerCase()}`
        );

        setProducts(filters.data);

        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    }

    loadStore();
  }, [search]);

  function handleAddToCart(product) {
    addCart(product);
  }

  return (
    <Container>
      <Content>
        <title>Loja</title>
        <Form>
          <SearchFilter
            onSearch={value => {
              setSearch(value);
            }}
          />
        </Form>
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <ListItems>
            {products.map(product => (
              <div key={product.product_id}>
                <ProductInfo>
                  <h1>{product.product_name}</h1>
                  <span className="description">
                    {product.product_description}
                  </span>
                  <h6>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(product.product_price)}
                  </h6>
                  <p>
                    <span>Cupom</span>
                    {product.coupon_code} |
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(product.coupon_amount)}
                  </p>
                </ProductInfo>

                <img
                  src={`${uploads}/${product.product_image}`}
                  alt="product"
                />

                <button type="button" onClick={() => handleAddToCart(product)}>
                  Adicionar
                </button>
              </div>
            ))}
          </ListItems>
        )}
      </Content>
    </Container>
  );
}
