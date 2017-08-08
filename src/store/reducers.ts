import { routerReducer as router } from 'react-router-redux';

import app from '../modules/app/reducer';
import user from '../modules/user/reducer';
import products from '../modules/products/reducer';
import homeProducts from '../modules/home/reducer';
import publishProducts from '../modules/publishProduct/reducer';

export default {
    app,
    user,
    router,
    homeProducts,
    publishProducts,
    ...products,
};
