import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

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
  // Input,
  FormGroup,
  FormInline,
  // SelectStyled,
} from './styles';

export default function SalesmanForm({ match }) {
  const formRef = useRef(null);
  const history = useHistory();
  const { id } = match.params;
  const isAdd = !id;

  const [initialData, setInitialData] = useState([]);

  const optionsState = [
    { label: 'Acre', value: 'AC' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
  ];

  useEffect(() => {
    async function loadSalesman() {
      if (!isAdd) {
        const response = await api.get(`/salesmans/${id}`);
        setInitialData(response.data);
      }
    }

    loadSalesman();
  }, []);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome deve ser preenchido'),
        birthdate: Yup.string().required(
          'A data de nascimento deve ser preenchida'
        ),
        cpf: Yup.number()
          .required()
          .typeError('O Cpf deve ser preenchido com valor númerico')
          .positive(),
        phone: Yup.number()
          .required()
          .typeError('O telefone deve ser preenchido com valor númerico')
          .positive(),
        email: Yup.string()
          .email('Insira um email válido')
          .required('email deve ser preenchido'),
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
        await api.post('/salesmans', data);
        toast.success('Cadastro efetuado com sucesso');
      } catch (err) {
        toast.danger('Não foi possível efetuar o cadastro');
      }
    } else {
      await api.put(`/salesmans/${id}`, data);

      toast.success('Atualizado com sucesso');
    }
  }

  return (
    <Container>
      <Header>
        <strong>Cadastrar Vendedor</strong>
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
          id="formSalesman"
        >
          <FormGroup>
            <label htmlFor="name">Nome</label>
            <Input type="text" name="name" maxLength="100" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="birthdate">Data de nascimento</label>
            <Input name="birthdate" />
          </FormGroup>
          <FormInline>
            <FormGroup>
              <label htmlFor="cpf">CPF</label>
              <Input name="cpf" maxLength="11" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="phone">Telefone</label>
              <Input name="phone" maxLength="16" />
            </FormGroup>
          </FormInline>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <Input name="email" maxLength="40" />
          </FormGroup>
          <FormInline>
            <FormGroup>
              <label htmlFor="zip_code">CEP</label>
              <Input name="zip_code" maxLength="10" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="street">Logradouro</label>
              <Input name="street" width="600px" maxLength="200" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="number">Nº</label>
              <Input name="number" width="200px" maxLength="6" />
            </FormGroup>
          </FormInline>
          <FormInline>
            <FormGroup>
              <label htmlFor="complement">Complemento</label>
              <Input name="complement" maxLength="50" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="neighborhood">Bairro</label>
              <Input name="neighborhood" maxLength="100" />
            </FormGroup>
          </FormInline>
          <FormInline>
            <FormGroup>
              <label htmlFor="city">Cidade</label>
              <Input name="city" maxLength="100" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="state">UF</label>
              {!isAdd ? (
                initialData.state && (
                  <Select
                    name="state"
                    options={optionsState}
                    placeholder="Selecione"
                  />
                )
              ) : (
                <Select
                  name="state"
                  options={optionsState}
                  placeholder="Selecione"
                />
              )}
            </FormGroup>
          </FormInline>
        </Form>
      </Content>

      <SubmitButton>
        <button type="submit" form="formSalesman">
          Salvar
        </button>
      </SubmitButton>
    </Container>
  );
}

SalesmanForm.defaultProps = {
  match: '',
};
SalesmanForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
