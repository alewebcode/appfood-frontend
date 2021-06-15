import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Input from '../../../components/Form/Input';

import Select from '../../../components/Form/Select';
import api from '../../../services/api';
import 'react-toastify/dist/ReactToastify.min.css';
import ImageInput from './ImageInput';

import {
  Container,
  Content,
  Header,
  SubmitButton,
  Form,
  // Input,
  FormGroup,
} from './styles';

export default function ProductForm({ match }) {
  const formRef = useRef(null);
  const history = useHistory();
  const { id } = match.params;
  const isAdd = !id;

  const [initialData, setInitialData] = useState([]);
  const [optionsSelect, setoptionsSelect] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      if (!isAdd) {
        const response = await api.get(`/products/${id}`);

        response.data.category = response.data.category.id;

        setInitialData(response.data);
      }
    }
    async function loadCategories() {
      const response = await api.get(`/categories?page=0&limit=0`);

      const categories = response.data.categories.map(value => {
        const option = {};
        option.label = value.name;
        option.value = value.id;

        return option;
      });

      setoptionsSelect(categories);
    }

    loadCategories();
    loadProducts();
  }, []);

  async function handleSubmit(data) {
    const formData = new FormData();
    if (isAdd) {
      formData.append('name', data.name);
      formData.append('image', data.image);
      formData.append('description', data.description);
      formData.append('price', data.price);
      formData.append('category', data.category);
      formData.append('company', 46); // somente teste

      try {
        await api.post('/products', formData);
        toast.success('Cadastro efetuado com sucesso');
      } catch (err) {
        toast.danger('Não foi possível efetuar o cadastro');
      }
    } else {
      formData.append('name', data.name);
      formData.append('image', data.image);
      formData.append('description', data.description);
      formData.append('price', data.price);
      formData.append('category', data.category);
      formData.append('company', 46); // somente teste

      await api.put(`/products/${id}`, formData);

      toast.success('Atualizado com sucesso');
    }
  }

  return (
    <Container>
      <Header>
        <strong>Cadastrar Produto</strong>
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
          id="formProduct"
        >
          <FormGroup>
            <ImageInput name="image" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="name">Nome</label>
            <Input type="text" name="name" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="description">Descrição</label>
            <Input name="description" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="price">Preço</label>
            <Input name="price" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="category">Categoria</label>
            {!isAdd ? (
              initialData.category && (
                <Select
                  name="category"
                  options={optionsSelect}
                  placeholder="Selecione"
                />
              )
            ) : (
              <Select
                name="category"
                options={optionsSelect}
                placeholder="Selecione"
              />
            )}
          </FormGroup>
        </Form>
      </Content>

      <SubmitButton>
        <button type="submit" form="formProduct">
          Salvar
        </button>
      </SubmitButton>
    </Container>
  );
}

ProductForm.defaultProps = {
  match: '',
};
ProductForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
