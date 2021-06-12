import React, { useState } from 'react';

import { Content, BannerTitle, Form } from './styles';

import api from '../../services/api';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,
      email,
      telephone,
      message,
    };

    await api.post('/sendEmail', data);
  }

  return (
    <>
      <BannerTitle>
        <h1>Fale conosco</h1>
      </BannerTitle>
      <Content>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder=""
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder=""
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="telephone">Telefone</label>
          <input
            type="text"
            id="telephone"
            placeholder=""
            value={telephone}
            onChange={e => setTelephone(e.target.value)}
          />

          <label
            htmlFor="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          >
            Mensagem
          </label>
          <textarea id="message" />

          <button type="submit">Enviar</button>
        </Form>
      </Content>
    </>
  );
}
