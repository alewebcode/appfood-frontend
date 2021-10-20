import React, { useEffect, useState, useContext } from 'react';

import { FiDollarSign } from 'react-icons/fi';
import { Container, Content, Coins } from './styles';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';
import { formatPrice } from '../../util/format';

export default function VirtualCoin() {
  const [finance, setFinance] = useState([]);
  const { authenticated } = useContext(AuthContext);
  const user = authenticated.user.id;

  useEffect(() => {
    async function loadFinances() {
      const response = await api.get(`/finances/${user}`);
      setFinance(response.data[0]);
    }

    loadFinances();
  }, []);
  return (
    <Container>
      <Content>
        <title>Moeda virtual</title>
        <Coins>
          <p>
            <FiDollarSign size={22} /> Moedas
          </p>

          <div>
            <span>
              <span className="price">
                {formatPrice(finance.commission ? finance.commission : 0)}
              </span>
            </span>
          </div>
        </Coins>
        <Coins>
          <p>
            <FiDollarSign size={22} /> Cashback
          </p>

          <div>
            <span>
              <span className="price">
                {formatPrice(
                  finance.total_cashback ? finance.total_cashback : 0
                )}
              </span>
            </span>
          </div>
        </Coins>
      </Content>
    </Container>
  );
}
