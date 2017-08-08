import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import AboutUsPage from '../containers/pages/AboutUs/AboutUsPage';
import MyProfilePage from '../containers/pages/MyProfile/MyProfile';
import BoughtProductsPage from '../containers/pages/BoughtProductPage/BoughtProductPage';
import SoldProductsPage from '../containers/pages/SoldProductsPage/SoldProductsPage';

const router = (
    <div>
        <Route exact={true} path="/" component={HomePage}/>
        <Route path="/my-profile" component={MyProfilePage}/>
        <Route path="/my-profile/bought-products" component={BoughtProductsPage}/>
        <Route path="/my-profile/sold-out" component={SoldProductsPage}/>
        <Route path="/about-us" component={AboutUsPage}/>
    </div>
);

export default router;
