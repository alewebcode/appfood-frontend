import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
// import Select from './Select';
import { CartContext } from '../../contexts/cart';
import { Content, Container, Form, ListItems, ProductInfo } from './styles';
import { SearchFilter } from './SearchFilter';
import api from '../../services/api';
import Loading from '../../components/Loading';

export default function ListCompanies() {
  const { addCart } = useContext(CartContext);
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setIsLoading] = useState(false);
  // const uploads = 'http://192.168.0.103:3333/uploads';
  // const uploads = 'https://appfood-backend.herokuapp.com/uploads';

  useEffect(() => {
    // setOptions(location.state.cities);

    async function loadCompanies() {
      const response = await api.get(`/companies/searchCompanies?slug=${slug}`);

      setProducts(response.data);
      // setIsLoaded(true);

      if (search) {
        setIsLoading(true);
        const filters = await api.get(
          `/companies/searchCompanies?filterProductCompany=${search.toLowerCase()}`
        );

        setProducts(filters.data);

        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    }

    loadCompanies();
  }, [search]);

  function handleAddToCart(product) {
    addCart(product);
  }

  return (
    <Container>
      <Content>
        <title>Produtos </title>
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
                {/* <Link to="/#/" onClick={OpenAddProductModal}> */}
                <ProductInfo>
                  <span className="company">{product.companies_name}</span>
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
                  src={`https://images-tdt.s3.amazonaws.com/${product.product_image}`}
                  alt="product"
                />

                <button type="button" onClick={() => handleAddToCart(product)}>
                  Adicionar
                </button>
                {/* </Link> */}
              </div>
            ))}
          </ListItems>
        )}
      </Content>
    </Container>
  );
}
