import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Default from '../pages/Default';
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ListCompanies from '../pages/ListCompanies';
import ProductsCompany from '../pages/ProductsCompany';

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
import SalesmanForm from '../pages/Auth/SalesmanForm';
import Salesman from '../pages/Auth/Salesman';
import User from '../pages/Auth/Users';
import UserForm from '../pages/Auth/UserForm';
import CouponForm from '../pages/Auth/CouponForm';
import Coupon from '../pages/Auth/Coupon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" layout={Default} exact component={Home} />
        <Route path="/About" layout={Default} component={About} />
        <Route path="/Contact" layout={Default} component={Contact} />
        <Route path="/login" layout={AuthLayout} component={Login} />
        <Route
          path="/ListCompanies"
          layout={Default}
          component={ListCompanies}
        />
        <Route
          path="/products/company"
          layout={Default}
          component={ProductsCompany}
        />
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
        <Route
          path="/auth/salesman/create"
          layout={DefaultLayout}
          component={SalesmanForm}
        />
        <Route
          path="/auth/salesmans"
          layout={DefaultLayout}
          component={Salesman}
        />
        <Route
          path="/auth/salesman/edit/:id"
          layout={DefaultLayout}
          component={SalesmanForm}
        />
        <Route path="/auth/users" layout={DefaultLayout} component={User} />

        <Route
          path="/auth/user/edit/:id"
          layout={DefaultLayout}
          component={UserForm}
        />
        <Route
          path="/auth/user/create"
          layout={DefaultLayout}
          component={UserForm}
        />
        <Route
          path="/auth/coupon/edit/:id"
          layout={DefaultLayout}
          component={CouponForm}
        />
        <Route
          path="/auth/coupon/create"
          layout={DefaultLayout}
          component={CouponForm}
        />
        <Route path="/auth/coupons" layout={DefaultLayout} component={Coupon} />
      </Switch>
    </BrowserRouter>
  );
}
