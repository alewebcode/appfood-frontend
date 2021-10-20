import React, { useState, useContext } from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import { Form, Logo } from './styles';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleUser } = useContext(AuthContext);
  // const [error, setError] = useState(false);

  const history = useHistory();
  const location = useLocation();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post(`/customers/signUp${location.search}`, {
        name,
        phone,
        email,
        password,
      });
      // setError(false);

      localStorage.setItem('token', response.data.token);

      // console.log(response);

      handleUser(response);

      // if (response.data.user.user.user_type === 3) {
      history.push('/');
      // } else {
      //   history.push('/auth/dashboard');
      // }
    } catch (err) {
      // setError(true);
    }
  }

  return (
    <>
      <Logo>Logo</Logo>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder=""
          onChange={event => setName(event.target.value)}
        />

        <label htmlFor="phone">Telefone</label>
        <input
          type="phone"
          id="phone"
          placeholder=""
          onChange={event => setPhone(event.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder=""
          onChange={event => setEmail(event.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder=""
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
}
