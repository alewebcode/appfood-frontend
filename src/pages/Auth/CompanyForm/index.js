import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import Input from '../../../components/Form/Input';
import Checkbox from '../../../components/Form/Checkbox';
import Select from '../../../components/Form/Select';
import api from '../../../services/api';
import 'react-toastify/dist/ReactToastify.min.css';
import Logo from './LogoInput';

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

export default function CompanyForm({ match }) {
  const formRef = useRef(null);
  const history = useHistory();
  const { id } = match.params;
  const isAdd = !id;

  const [initialData, setInitialData] = useState([]);
  const [optionsSelect, setoptionsSelect] = useState([]);

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
    async function loadCompany() {
      if (!isAdd) {
        const response = await api.get(`/companies/${id}`);

        response.data.segment = response.data.segment.id;

        setInitialData(response.data);
      }
    }
    async function loadSegments() {
      const response = await api.get(`/segments?page=0&limit=0`);

      const segments = response.data.segments.map(value => {
        const option = {};
        option.label = value.name;
        option.value = value.id;

        return option;
      });

      setoptionsSelect(segments);
    }

    loadCompany();
    loadSegments();
  }, []);

  async function handleSubmit(data, { reset }) {
    const formData = new FormData();

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome deve ser preenchido'),
        trading_name: Yup.string().required(
          'A razão social deve ser preenchida'
        ),
        cnpj: Yup.number()
          .required()
          .typeError('O cnpj deve ser preenchido com valor númerico ')
          .positive(),

        street: Yup.string().required('O logradouro deve ser preenchido'),
        number: Yup.number()
          .required()
          .typeError('O Nº deve ser preenchido com valor númerico')
          .positive(),

        neighborhood: Yup.string().required('O bairro deve ser preenchido'),
        city: Yup.string().required('A cidade deve ser preenchida'),
        state: Yup.string().required('O estado deve ser preenchido'),
        phone: Yup.number()
          .required()
          .typeError('O telefone ser preenchido com valor númerico')
          .positive(),
        email: Yup.string()
          .email('Insira um email válido')
          .required('email deve ser preenchido'),
        segment: Yup.number().typeError('O segmento deve ser preenchido'),
        delivery: Yup.boolean().required(),
        pickup_in_place: Yup.boolean().required(),
      });
      schema.test(
        // this test is added additional to any other (build-in) tests
        'myCustomCheckboxTest',
        null, // we'll return error message ourself if needed
        obj => {
          // only testing the checkboxes here
          if (obj.red || obj.orange || obj.green) {
            return true; // everything is fine
          }

          return new Yup.ValidationError(
            'Check at least one checkbox',
            null,
            'myCustomFieldName'
          );
        }
      );

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
      formData.append('name', data.name);
      formData.append('logo', data.logo);
      formData.append('trading_name', data.trading_name);
      formData.append('cnpj', data.cnpj);
      formData.append('state_registration', data.state_registration);
      formData.append('zip_code', data.zip_code);
      formData.append('street', data.street);
      formData.append('number', data.number);
      formData.append('complement', data.complement);
      formData.append('neighborhood', data.neighborhood);
      formData.append('city', data.city);
      formData.append('state', data.state);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('delivery', data.delivery);
      formData.append('pickup_in_place', data.pickup_in_place);
      formData.append('segment', data.segment);

      try {
        await api.post('/companies', formData);
        toast.success('Cadastro efetuado com sucesso');
      } catch (err) {
        console.log(err.response);
        toast.danger('Não foi possível efetuar o cadastro');
      }
    } else {
      formData.append('name', data.name);
      formData.append('logo', data.logo);
      formData.append('trading_name', data.trading_name);
      formData.append('cnpj', data.cnpj);
      formData.append('state_registration', data.state_registration);
      formData.append('zip_code', data.zip_code);
      formData.append('street', data.street);
      formData.append('number', data.number);
      formData.append('complement', data.complement);
      formData.append('neighborhood', data.neighborhood);
      formData.append('city', data.city);
      formData.append('state', data.state);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('delivery', String(data.delivery));
      formData.append('pickup_in_place', data.pickup_in_place);
      formData.append('segment', data.segment);

      await api.put(`/companies/${id}`, formData);

      toast.success('Atualizado com sucesso');
    }
  }

  return (
    <Container>
      <Header>
        <strong>Cadastrar Empresa</strong>
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
          id="formCompany"
        >
          <FormGroup>
            <Logo name="logo" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="name">Nome</label>
            <Input type="text" name="name" maxlength="100" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="trading_name">Razão social</label>
            <Input name="trading_name" maxlength="100" />
          </FormGroup>
          <FormInline>
            <FormGroup>
              <label htmlFor="cnpj">CNPJ</label>
              <Input name="cnpj" maxlength="14" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="state_registration">Incrição estadual</label>
              <Input name="state_registration" maxlength="20" />
            </FormGroup>
          </FormInline>
          <FormInline>
            <FormGroup>
              <label htmlFor="zip_code">CEP</label>
              <Input name="zip_code" maxlength="10" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="street">Logradouro</label>
              <Input name="street" width="600px" maxlength="200" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="number">Nº</label>
              <Input name="number" maxlength="5" />
            </FormGroup>
          </FormInline>
          <FormInline>
            <FormGroup>
              <label htmlFor="complement">Complemento</label>
              <Input name="complement" maxlength="50" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="neighborhood">Bairro</label>
              <Input name="neighborhood" maxlength="150" />
            </FormGroup>
          </FormInline>
          <FormInline>
            <FormGroup>
              <label htmlFor="city">Cidade</label>
              <Input name="city" maxlength="100" />
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

          <FormGroup>
            <label htmlFor="phone">Telefone</label>
            <Input name="phone" maxlength="16" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <Input name="email" maxlength="50" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="segment">Segmento</label>

            {optionsSelect.length && (
              <Select
                name="segment"
                options={optionsSelect}
                placeholder="Selecione"
              />
            )}
          </FormGroup>
          <FormInline>
            <FormGroup>
              <label htmlFor="delivery">
                <Checkbox name="delivery" /> Delivery
              </label>
            </FormGroup>
            <FormGroup>
              <label htmlFor="pickup_in_place">
                <Checkbox name="pickup_in_place" />
                Retirada no local
              </label>
            </FormGroup>
          </FormInline>
        </Form>
      </Content>

      <SubmitButton>
        <button type="submit" form="formCompany">
          Salvar
        </button>
      </SubmitButton>
    </Container>
  );
}

CompanyForm.defaultProps = {
  match: '',
};
CompanyForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
