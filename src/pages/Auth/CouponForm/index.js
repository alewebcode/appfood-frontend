import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import api from '../../../services/api';
import 'react-toastify/dist/ReactToastify.min.css';

import {
  Container,
  Content,
  Header,
  SubmitButton,
  Form,
  FormGroup,
} from './styles';

export default function CouponForm({ match }) {
  const formRef = useRef(null);
  const history = useHistory();
  const { id } = match.params;
  const isAdd = !id;

  const [initialData, setInitialData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadCoupon() {
      if (!isAdd) {
        const response = await api.get(`/coupons/${id}`);

        response.data.product = response.data.product.id;

        setInitialData(response.data);
      }
    }
    async function loadProducts() {
      const response = await api.get(`/products?page=0&limit=0`);

      const data = response.data.products.map(value => {
        const option = {};
        option.label = value.name;
        option.value = value.id;

        return option;
      });

      setProducts(data);
    }

    loadCoupon();
    loadProducts();
  }, []);

  async function handleSubmit(data) {
    if (isAdd) {
      try {
        await api.post('/coupons', data);
        toast.success('Cadastro efetuado com sucesso');
      } catch (err) {
        toast.danger('Não foi possível efetuar o cadastro');
      }
    } else {
      await api.put(`/coupons/${id}`, data);

      toast.success('Atualizado com sucesso');
    }
  }

  return (
    <Container>
      <Header>
        <strong>Cadastrar Cupom</strong>
        <button type="button" onClick={() => history.goBack()}>
          <FiArrowLeft />
          <span>Voltar</span>
        </button>
      </Header>
      <Content>
        <Form
          ref={formRef}
          initialData={initialData}
          onSubmit={handleSubmit}
          id="formCoupon"
        >
          <FormGroup>
            <label htmlFor="description">Descrição</label>
            <Input type="text" name="description" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="amount">Valor</label>
            <Input name="amount" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="coupon_code">Código cupom</label>
            <Input name="coupon_code" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="product">Produto</label>

            {products.length && (
              <Select
                name="product"
                options={products}
                placeholder="Selecione"
              />
            )}
          </FormGroup>
        </Form>
      </Content>

      <SubmitButton>
        <button type="submit" form="formCoupon">
          Salvar
        </button>
      </SubmitButton>
    </Container>
  );
}

CouponForm.defaultProps = {
  match: '',
};
CouponForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
