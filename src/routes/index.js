import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Default from '../pages/Default';
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Dashboard from '../pages/Auth/Dashboard';
import Company from '../pages/Auth/Company';
import CompanyForm from '../pages/Auth/CompanyForm';
import SegmentForm from '../pages/Auth/SegmentForm';
import Segment from '../pages/Auth/Segment';
import CategoryForm from '../pages/Auth/CategoryForm';
import Category from '../pages/Auth/Category';
import ProductForm from '../pages/Auth/ProductForm';
import Product from '../pages/Auth/Product';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" layout={Default} exact component={Home} />
        <Route path="/About" layout={Default} component={About} />
        <Route path="/Contact" layout={Default} component={Contact} />
        <Route path="/login" layout={AuthLayout} component={Login} />
        <Route
          path="/auth/dashboard"
          layout={DefaultLayout}
          component={Dashboard}
        />
        <Route
          path="/auth/companies"
          layout={DefaultLayout}
          component={Company}
        />
        <Route
          path="/auth/company/create"
          layout={DefaultLayout}
          component={CompanyForm}
        />
        <Route
          path="/auth/company/edit/:id"
          layout={DefaultLayout}
          component={CompanyForm}
        />

        <Route
          path="/auth/segments"
          layout={DefaultLayout}
          component={Segment}
        />
        <Route
          path="/auth/segment/create"
          layout={DefaultLayout}
          component={SegmentForm}
        />
        <Route
          path="/auth/segment/edit/:id"
          layout={DefaultLayout}
          component={SegmentForm}
        />

        <Route
          path="/auth/categories"
          layout={DefaultLayout}
          component={Category}
        />

        <Route
          path="/auth/category/create"
          layout={DefaultLayout}
          component={CategoryForm}
        />

        <Route
          path="/auth/category/edit/:id"
          layout={DefaultLayout}
          component={CategoryForm}
        />

        <Route
          path="/auth/products"
          layout={DefaultLayout}
          component={Product}
        />

        <Route
          path="/auth/product/create"
          layout={DefaultLayout}
          component={ProductForm}
        />
        <Route
          path="/auth/product/edit/:id"
          layout={DefaultLayout}
          component={ProductForm}
        />
      </Switch>
    </BrowserRouter>
  );
}
