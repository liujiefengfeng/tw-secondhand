import { combineEpics } from 'redux-most';

import { epics as userEpic } from '../modules/user/actions';
import { epics as productsEpics } from '../modules/products/actions';
import { epics as homeProductsEpic } from '../modules/home/actions';

export default combineEpics([
    ...userEpic,
    ...productsEpics,
    ...homeProductsEpic,
]);
