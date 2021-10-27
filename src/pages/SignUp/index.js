import React, { useContext, useRef } from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Logo } from './styles';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';
import Input from '../../components/Form/Input';

export default function SignUp() {
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { handleUser } = useContext(AuthContext);
  const formRef = useRef(null);

  const history = useHistory();
  const location = useLocation();

  async function handleSubmit(data) {
    // event.preventDefault();

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome deve ser preenchido'),
        email: Yup.string()
          .email('Insira um email válido')
          .required('email deve ser preenchido'),
        password: Yup.string()
          .min(6, 'No minimo 6 caracteres')
          .required('senha deve ser preenchida'),
        phone: Yup.string().required('O telefone deve ser preenchido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post(
        `/customers/signUp${location.search}`,
        data
      );

      localStorage.setItem('token', response.data.token);

      handleUser(response);

      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
      // setError(true);
    }
  }

  return (
    <>
      <Logo>Logo</Logo>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="name">Nome</label>
        <Input type="text" name="name" placeholder="" />
        {/* <input
          type="text"
          id="name"
          placeholder=""
          onChange={event => setName(event.target.value)}
        /> */}

        <label htmlFor="phone">Telefone</label>
        <Input type="text" name="phone" placeholder="" />
        {/* <input
          type="phone"
          id="phone"
          placeholder=""
          onChange={event => setPhone(event.target.value)}
        /> */}

        <label htmlFor="email">Email</label>
        <Input type="text" name="email" placeholder="" />
        {/* <input
          type="email"
          id="email"
          placeholder=""
          onChange={event => setEmail(event.target.value)}
        /> */}
        <label htmlFor="password">Senha</label>
        <Input type="password" name="password" placeholder="" />

        {/* <input
          type="password"
          id="password"
          placeholder=""
          onChange={event => setPassword(event.target.value)}
        /> */}

        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
}
