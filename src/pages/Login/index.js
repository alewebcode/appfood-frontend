import React from 'react';

import { Form, Logo } from './styles';

export default function Login() {
  return (
    <>
      <Logo>
        <h1>Logo</h1>
      </Logo>
      <Form>
        <label htmlFor="login">Login</label>
        <input type="text" id="login" placeholder="" />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="" />

        <button type="submit">Entrar</button>
      </Form>
    </>
  );
}
