import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

const PrivateRoute = ({
  component: Component,
  layout: Layout,
  ...otherProps
}) => {
  const { authenticated } = useContext(AuthContext);

  return (
    <Route
      {...otherProps}
      render={props =>
        authenticated ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={otherProps.redirectTo ? otherProps.redirectTo : '/login'}
          />
        )
      }
    />
  );
};
PrivateRoute.propTypes = {
  layout: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
