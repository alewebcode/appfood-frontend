import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Input from '../../../components/Form/Input';
import api from '../../../services/api';
import 'react-toastify/dist/ReactToastify.min.css';

import {
  Container,
  Content,
  Header,
  SubmitButton,
  Form,
  // Input,
  FormGroup,
} from './styles';

export default function CategoryForm({ match }) {
  const formRef = useRef(null);
  const history = useHistory();
  const { id } = match.params;
  const isAdd = !id;

  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    async function loadCompany() {
      if (!isAdd) {
        const response = await api.get(`/categories/${id}`);

        setInitialData(response.data);
      }
    }

    loadCompany();
  }, []);

  async function handleSubmit(data) {
    if (isAdd) {
      try {
        await api.post('/categories', data);
        toast.success('Cadastro efetuado com sucesso');
      } catch (err) {
        toast.danger('Não foi possível efetuar o cadastro');
      }
    } else {
      await api.put(`/categories/${id}`, data);

      toast.success('Atualizado com sucesso');
    }
  }

  return (
    <Container>
      <Header>
        <strong>Cadastrar Categoria</strong>
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
          id="formCategory"
        >
          <FormGroup>
            <label htmlFor="name">Nome</label>
            <Input type="text" name="name" />
          </FormGroup>
        </Form>
      </Content>

      <SubmitButton>
        <button type="submit" form="formCategory">
          Salvar
        </button>
      </SubmitButton>
    </Container>
  );
}

CategoryForm.defaultProps = {
  match: '',
};
CategoryForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
