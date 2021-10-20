import React, { useEffect, useRef, useContext, useState } from 'react';
import { FiUser, FiMapPin } from 'react-icons/fi';
import { toast } from 'react-toastify';
// import { useLocation, Link } from 'react-router-dom';

// import { parseISO, format } from 'date-fns';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';

import {
  Content,
  Container,
  PersonalData,
  Address,
  Title,
  Form,
  FormGroup,
  FormInline,
} from './styles';

import api from '../../services/api';

import { AuthContext } from '../../contexts/auth';
// import { formatPrice } from '../../util/format';

export default function UserAccount() {
  const formRef = useRef(null);
  const { authenticated } = useContext(AuthContext);
  const [customer, setCustomer] = useState([]);
  const [initialData, setInitialData] = useState([]);

  // const [isLoaded, setIsLoaded] = useState(false);
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
    async function loadCustomers() {
      const user = authenticated.user.id;
      const response = await api.get(`/customers/${user}/account`);

      setInitialData(response.data);
      setCustomer(response.data.id);
    }
    loadCustomers();
  }, []);

  async function handleSubmit(data) {
    try {
      await api.put(`/customers/${customer}`, data);

      toast.success('Atualizado com sucesso');
    } catch (err) {
      toast.danger('Não foi possível possivel atualizar o cadastro');
    }
  }

  return (
    <>
      <Container>
        <Content>
          <title>Minha conta</title>
          <Form
            ref={formRef}
            initialData={initialData}
            onSubmit={handleSubmit}
            id="formAccount"
          >
            <PersonalData>
              <Title>
                <FiUser /> Dados Pessoais
              </Title>

              <FormGroup>
                <label htmlFor="name">Nome</label>
                <Input type="text" name="name" />
              </FormGroup>

              <FormGroup>
                <label htmlFor="cpf">CPF</label>
                <Input name="cpf" />
              </FormGroup>

              <FormGroup>
                <label htmlFor="phone">Telefone</label>
                <Input name="phone" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <Input name="email" />
              </FormGroup>
            </PersonalData>
            <Address>
              <Title>
                <FiMapPin /> Endereço de entrega
              </Title>
              <FormGroup>
                <label htmlFor="zip_code">CEP</label>
                <Input type="text" name="zip_code" />
              </FormGroup>
              <FormInline>
                <FormGroup>
                  <label htmlFor="street">Endereço</label>
                  <Input type="text" name="street" className="custom-address" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="number">Nº</label>
                  <Input type="text" name="number" className="custom-number" />
                </FormGroup>
              </FormInline>
              <FormGroup>
                <label htmlFor="complement">Complemento</label>
                <Input type="text" name="complement" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="neighborhood">Bairro</label>
                <Input type="text" name="neighborhood" />
              </FormGroup>

              <FormGroup>
                <label htmlFor="city">Cidade</label>
                <Input type="text" name="city" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="state">UF</label>
                <Select
                  name="state"
                  options={optionsState}
                  placeholder="Selecione"
                  className="custom-number"
                />
              </FormGroup>
            </Address>
          </Form>
          <button type="submit" form="formAccount">
            Salvar
          </button>
        </Content>
      </Container>
    </>
  );
}
