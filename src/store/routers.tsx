import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import AboutUsPage from '../containers/pages/AboutUs/AboutUsPage';
import MyProfilePage from '../containers/pages/MyProfile/MyProfile';
import BoughtProductsPage from '../containers/pages/BoughtProductPage/BoughtProductPage';
<<<<<<< 6ccb0d5c1dc0a225760e4a91b930d2802cb98ec5
import SoldProductsPage from '../containers/pages/SoldProductsPage/SoldProductsPage';
=======
import PublishProduct from '../containers/pages/PublishProduct/PublishProduct';
>>>>>>> [qlyan] add publish product page

const router = (
    <div className="app-router">
        <Route exact={true} path="/" component={HomePage}/>
        <Route path="/my-profile" component={MyProfilePage}/>
        <Route path="/bought-products" component={BoughtProductsPage}/>
        <Route path="/sold-out" component={SoldProductsPage}/>
        <Route path="/about-us" component={AboutUsPage}/>
        <Route path="/publish-product" component={PublishProduct}/>
    </div>
);

export default router;
