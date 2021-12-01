import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';
import PrivateRoute from './PrivateRoute';

import SiteLayout from '../pages/_layouts/site';
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ListCompanies from '../pages/ListCompanies';
import ProductsCompany from '../pages/ProductsCompany';
import Checkout from '../pages/Checkout';
import UserOrders from '../pages/UserOrders';
import UserAccount from '../pages/UserAccount';
import VirtualCoin from '../pages/VirtualCoin';
import Store from '../pages/Store';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
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
import Order from '../pages/Auth/Order';
import ReferralForm from '../pages/Auth/ReferralForm';
import Referral from '../pages/Referral';
import CustomerForm from '../pages/Auth/CustomerForm';
import Customer from '../pages/Auth/Customer';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" layout={SiteLayout} exact component={Home} />
        <Route path="/About" layout={SiteLayout} component={About} />
        <Route path="/Contact" layout={SiteLayout} component={Contact} />
        <Route path="/registrar" layout={AuthLayout} component={SignUp} />
        <Route path="/login" layout={AuthLayout} component={Login} />
        <Route
          path="/lista-lojas/:slug?"
          layout={SiteLayout}
          component={ListCompanies}
        />
        <Route path="/loja" layout={SiteLayout} component={Store} />
        <Route
          path="/products/company"
          layout={SiteLayout}
          component={ProductsCompany}
        />
        <Route path="/checkout" layout={SiteLayout} component={Checkout} />
        <PrivateRoute
          path="/orders"
          layout={SiteLayout}
          component={UserOrders}
        />
        <PrivateRoute
          path="/indicar-amigo"
          layout={SiteLayout}
          component={Referral}
        />
        <PrivateRoute
          path="/moeda-virtual"
          layout={SiteLayout}
          component={VirtualCoin}
        />
        <PrivateRoute
          path="/account"
          layout={SiteLayout}
          component={UserAccount}
        />

        <PrivateRoute
          path="/auth/dashboard"
          layout={DefaultLayout}
          component={Dashboard}
        />
        <PrivateRoute
          path="/auth/orders"
          layout={DefaultLayout}
          component={Order}
        />
        <PrivateRoute
          path="/auth/companies"
          layout={DefaultLayout}
          component={Company}
        />
        <PrivateRoute
          path="/auth/company/create"
          layout={DefaultLayout}
          component={CompanyForm}
        />
        <PrivateRoute
          path="/auth/company/edit/:id"
          layout={DefaultLayout}
          component={CompanyForm}
        />

        <PrivateRoute
          path="/auth/segments"
          layout={DefaultLayout}
          component={Segment}
        />
        <PrivateRoute
          path="/auth/segment/create"
          layout={DefaultLayout}
          component={SegmentForm}
        />
        <PrivateRoute
          path="/auth/segment/edit/:id"
          layout={DefaultLayout}
          component={SegmentForm}
        />

        <PrivateRoute
          path="/auth/categories"
          layout={DefaultLayout}
          component={Category}
        />

        <PrivateRoute
          path="/auth/category/create"
          layout={DefaultLayout}
          component={CategoryForm}
        />

        <PrivateRoute
          path="/auth/category/edit/:id"
          layout={DefaultLayout}
          component={CategoryForm}
        />

        <PrivateRoute
          path="/auth/products"
          layout={DefaultLayout}
          component={Product}
        />

        <PrivateRoute
          path="/auth/product/create"
          layout={DefaultLayout}
          component={ProductForm}
        />
        <PrivateRoute
          path="/auth/product/edit/:id"
          layout={DefaultLayout}
          component={ProductForm}
        />
        <PrivateRoute
          path="/auth/salesman/create"
          layout={DefaultLayout}
          component={SalesmanForm}
        />
        <PrivateRoute
          path="/auth/salesmans"
          layout={DefaultLayout}
          component={Salesman}
        />
        <PrivateRoute
          path="/auth/salesman/edit/:id"
          layout={DefaultLayout}
          component={SalesmanForm}
        />
        <PrivateRoute
          path="/auth/users"
          layout={DefaultLayout}
          component={User}
        />

        <PrivateRoute
          path="/auth/user/edit/:id"
          layout={DefaultLayout}
          component={UserForm}
        />
        <PrivateRoute
          path="/auth/user/create"
          layout={DefaultLayout}
          component={UserForm}
        />
        <PrivateRoute
          path="/auth/coupon/edit/:id"
          layout={DefaultLayout}
          component={CouponForm}
        />
        <PrivateRoute
          path="/auth/coupon/create"
          layout={DefaultLayout}
          component={CouponForm}
        />
        <PrivateRoute
          path="/auth/coupons"
          layout={DefaultLayout}
          component={Coupon}
        />
        <PrivateRoute
          path="/auth/referrals"
          layout={DefaultLayout}
          component={ReferralForm}
        />
        <PrivateRoute
          path="/auth/customer/create"
          layout={DefaultLayout}
          component={CustomerForm}
        />
        <PrivateRoute
          path="/auth/customers"
          layout={DefaultLayout}
          component={Customer}
        />
        <PrivateRoute
          path="/auth/customer/edit/:id"
          layout={DefaultLayout}
          component={CustomerForm}
        />
      </Switch>
    </BrowserRouter>
  );
}
