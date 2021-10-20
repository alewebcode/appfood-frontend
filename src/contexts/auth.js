import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';
import Loading from '../components/Loading';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedUser && storagedToken) {
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

      setAuthenticated(JSON.parse(storagedUser));
    }
    setLoading(false);
  }, []);

  const handleUser = user => {
    setAuthenticated(user.data);
    api.defaults.headers.Authorization = `Bearer ${user.data.token}`;

    localStorage.setItem('@App:user', JSON.stringify(user.data));
    localStorage.setItem('@App:token', user.data.token);
  };

  const logout = () => {
    localStorage.clear();
    setAuthenticated(null);
  };

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(authenticated),
        handleUser,
        logout,
        authenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
// export function useAuth() {
//   const context = useContext(AuthContext);

//   return context;
// }

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { AuthContext, AuthProvider };
