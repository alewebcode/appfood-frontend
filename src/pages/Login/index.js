import React, { useState, useContext } from 'react';

import { useHistory } from 'react-router-dom';
import { Form, Logo } from './styles';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { handleUser } = useContext(AuthContext);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post('/authenticate', {
        email,
        password,
      });
      setError(false);

      handleUser(response);

      if (response.data.user.user_type.id === 3) {
        history.goBack();
      } else {
        history.push('/auth/dashboard');
      }
    } catch (err) {
      setError(true);
    }
  }

  return (
    <>
      <Logo>
        <h1>Logo</h1>
      </Logo>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="login">Email</label>
        <input
          type="text"
          id="login"
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

        <button type="submit">Entrar</button>
        {error ? <span>Login ou senha inválidos</span> : ''}
      </Form>
    </>
  );
}
