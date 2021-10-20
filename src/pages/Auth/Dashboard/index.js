import React, { useEffect, useState, useContext } from 'react';

import { FiDollarSign } from 'react-icons/fi';
import { Container, Content, TotalsFinance, Header } from './styles';
import api from '../../../services/api';
import { AuthContext } from '../../../contexts/auth';
import { formatPrice } from '../../../util/format';

export default function Dashboard() {
  const [finance, setFinance] = useState([]);
  const { authenticated } = useContext(AuthContext);
  const user = authenticated.user.id;

  useEffect(() => {
    async function loadFinances() {
      const response = await api.get(`/finances/${user}`);
      setFinance(response.data);
    }

    loadFinances();
  }, []);
  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>
      </Header>
      <Content>
        <TotalsFinance>
          <p>
            <FiDollarSign size={22} /> Resumo financeiro
          </p>

          <div>
            <span>
              Crédito virtual:
              <span className="price">
                {formatPrice(finance.commission ? finance.commission : 0)}
              </span>
            </span>
            {finance.user_type === 1 ? (
              <span>
                Total dinheiro:
                <span className="price">
                  {formatPrice(finance.total_amount ? finance.total_amount : 0)}
                </span>
              </span>
            ) : (
              ''
            )}
            <span>
              Cashback:
              <span className="price">
                {formatPrice(
                  finance.total_cashback ? finance.total_cashback : 0
                )}
              </span>
            </span>
          </div>
        </TotalsFinance>
      </Content>
    </Container>
  );
}
