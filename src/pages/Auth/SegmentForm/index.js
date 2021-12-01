import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import * as Yup from 'yup';

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

export default function SegmentForm({ match }) {
  const formRef = useRef(null);
  const history = useHistory();
  const { id } = match.params;
  const isAdd = !id;

  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    async function loadCompany() {
      if (!isAdd) {
        const response = await api.get(`/segments/${id}`);

        setInitialData(response.data);
      }
    }

    loadCompany();
  }, []);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome deve ser preenchido'),
        description: Yup.string().required('A descrição deve ser preenchida'),
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
      // setError(true);
    }
    if (isAdd) {
      try {
        await api.post('/segments', data);
        toast.success('Cadastro efetuado com sucesso');
      } catch (err) {
        toast.danger('Não foi possível efetuar o cadastro');
      }
    } else {
      await api.put(`/segments/${id}`, data);

      toast.success('Atualizado com sucesso');
    }
  }

  return (
    <Container>
      <Header>
        <strong>Cadastrar Segmento</strong>
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
          id="formSegment"
        >
          <FormGroup>
            <label htmlFor="name">Nome</label>
            <Input type="text" name="name" maxlenght="100" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="description">Descrição</label>
            <Input name="description" maxlenght="100" />
          </FormGroup>
        </Form>
      </Content>

      <SubmitButton>
        <button type="submit" form="formSegment">
          Salvar
        </button>
      </SubmitButton>
    </Container>
  );
}

SegmentForm.defaultProps = {
  match: '',
};
SegmentForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
