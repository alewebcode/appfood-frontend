import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiPlusCircle,
  FiEdit,
  FiChevronRight,
  FiChevronLeft,
} from 'react-icons/fi';
import { toast } from 'react-toastify';

import { SearchFilter } from '../../../components/Auth/SearchFilter';
import api from '../../../services/api';

import {
  Container,
  Content,
  Header,
  Table,
  Actions,
  Pagination,
  PaginationButton,
  PaginationItem,
  PaginationAction,
  PaginationNumber,
} from './styles';
import { ToogleSwitch } from '../../../components/Auth/ToogleSwitch';

export default function User() {
  // const history = useHistory();
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [isChecked, setChecked] = useState(false);

  const [search, setSearch] = useState('');
  const limit = 5;

  async function handleCheck(user) {
    // setChecked(prevState => !prevState);
    if (user.active) {
      const confirmBox = window.confirm(
        'Tem certeza que deseja desativar o usuário?'
      );
      if (confirmBox === true) {
        try {
          await api.put(`/users/inactivate/${user.id}`);
          toast.success('Usuário inativado com sucesso');
        } catch (err) {
          toast.danger('Não foi possível efetuar a inativação');
        }
      }
    } else {
      try {
        await api.put(`/users/activate/${user.id}`);
        toast.success('Usuário ativado com sucesso');
      } catch (err) {
        toast.danger('Não foi possível efetuar a ativação');
      }
    }
  }

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get(
        `/users?page=${currentPage}&limit=${limit}`
      );

      setTotal(response.data.totalResults);
      const totalPages = Math.ceil(total / limit);

      const arrPages = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
      }

      setPages(arrPages);

      setUsers(response.data.users);

      if (search) {
        const filters = await api.get(
          `/users?filter=${search.toLowerCase()}&page=${currentPage}&limit=${limit}`
        );
        setUsers(filters.data.users);
      }
    }

    loadUsers();
  }, [currentPage, total, search]);

  return (
    <Container>
      <Header>
        <strong>Usuários</strong>
        <Link to="user/create">
          <FiPlusCircle />
          <span>Novo {isChecked}</span>
        </Link>
      </Header>
      <SearchFilter
        onSearch={value => {
          setSearch(value);
          setCurrentPage(1);
        }}
      />
      <Content>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Tipo usuário</th>
              <th>Ações </th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.user_type.name}</td>

                <td>
                  <Actions>
                    <Link to={`user/edit/${user.id}`}>
                      <FiEdit size="24" />
                    </Link>
                    <ToogleSwitch
                      isToogle={user.active}
                      onClick={() => handleCheck(user)}
                    />
                  </Actions>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      <Pagination>
        <div>Total de {total} registros</div>
        <PaginationAction>
          {currentPage > 1 && (
            <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
              <FiChevronLeft />
            </PaginationItem>
          )}
          <PaginationButton>
            {pages.map(page => (
              <PaginationNumber
                isSelect={page === currentPage}
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationNumber>
            ))}
          </PaginationButton>
          {currentPage < pages.length && (
            <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
              <FiChevronRight />
            </PaginationItem>
          )}
        </PaginationAction>
      </Pagination>
    </Container>
  );
}
