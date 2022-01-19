import React, { useEffect, useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import api from '../../../services/api';
import 'react-toastify/dist/ReactToastify.min.css';
import InputCurrency from '../../../components/Form/InputCurrency';

import {
  Container,
  Content,
  Header,
  SubmitButton,
  Form,
  FormGroup,
} from './styles';
import { AuthContext } from '../../../contexts/auth';

export default function CouponForm({ match }) {
  const formRef = useRef(null);
  const history = useHistory();
  const { id } = match.params;
  const isAdd = !id;

  const [initialData, setInitialData] = useState([]);
  const [products, setProducts] = useState([]);
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    async function loadCoupon() {
      if (!isAdd) {
        const response = await api.get(`/coupons/${id}`);

        formRef.current.setData({
          product: {
            label: response.data.product.name,
            value: response.data.product.id,
          },
        });

        setInitialData(response.data);
      }
    }
    async function loadProducts() {
      const response = await api.get(
        `/products?page=0&limit=0&referral_code=${authenticated.user.referral_code}`
      );

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

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        description: Yup.string().required('A descrição deve ser preenchida'),
        amount: Yup.string().required('O valor deve ser preenchido'),
        coupon_code: Yup.string().required(
          'O código de cupom deve ser preenchido'
        ),
        product: Yup.number().typeError('O produto deve ser preenchido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
      return;
    }
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
            <Input type="text" name="description" maxlength="100" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="amount">Valor</label>
            <InputCurrency
              name="amount"
              decimalScale={2}
              decimalSeparator=","
              fixedDecimalScale
              thousandSeparator="."
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="coupon_code">Código cupom</label>
            <Input name="coupon_code" maxlength="20" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="product">Produto</label>

            <Select name="product" options={products} placeholder="Selecione" />
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
