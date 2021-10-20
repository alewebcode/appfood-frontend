import React, { useRef, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Input from '../../components/Form/Input';
import api from '../../services/api';
import 'react-toastify/dist/ReactToastify.min.css';
import whatsapp_icon from '../../assets/whatsapp_icon.svg';
import { Container, Content, Form, FormGroup, FormInline } from './styles';
import Loading from '../../components/Loading';

export default function Referral() {
  const formRef = useRef(null);

  const [referralLink, setReferralLink] = useState('');
  const [email, setEmail] = useState('');
  const [buttonEmail, setbuttonEmail] = useState(false);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 6000);
    }
    const user = localStorage.getItem('@App:user');
    const data = JSON.parse(user);

    setReferralLink(
      `http://localhost:3000/registrar?refferer=${data.user.referral_code}`
    );
  }, []);

  function handleWhatsapp() {
    window.open(
      `https://api.whatsapp.com/send?text=${referralLink}`,
      '_system',
      'location=yes'
    );
    return false;
  }

  async function handleSubmit(data) {
    try {
      await api.post('/coupons', data);
      toast.success('Cadastro efetuado com sucesso');
    } catch (err) {
      toast.danger('Não foi possível efetuar o cadastro');
    }
  }
  async function handleSendMailIndication() {
    setIsLoading(true);
    setbuttonEmail(true);

    const data = {
      email,
      referralLink,
    };

    try {
      await api.post('/users/sendMailIndication', data);
      setbuttonEmail(false);
      setEmail('');
      setIsLoading(false);

      toast.success('Email enviado com sucesso');
    } catch (err) {
      toast.danger('Não foi possível enviar o email');
    }
  }

  return (
    <Container>
      <Content>
        <title>Indicar um amigo</title>

        {loading ? (
          <Loading loading={loading} />
        ) : (
          <Form ref={formRef} onSubmit={handleSubmit} id="formReferral">
            <FormInline>
              <FormGroup>
                <label htmlFor="email">Enviar por email</label>
                <Input
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormGroup>
              <div>
                <button
                  type="button"
                  disabled={buttonEmail}
                  onClick={() => handleSendMailIndication()}
                >
                  Enviar
                </button>
              </div>
            </FormInline>
            <FormInline>
              <FormGroup>
                <label htmlFor="referral_link">Link de indicação</label>
                <Input type="text" name="referral_link" value={referralLink} />
              </FormGroup>

              <span>
                <button type="button" onClick={() => handleWhatsapp()}>
                  <img src={whatsapp_icon} width="30" height="30" alt="whats" />
                </button>
              </span>
            </FormInline>
          </Form>
        )}
      </Content>
    </Container>
  );
}
