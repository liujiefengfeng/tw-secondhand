import { fromPromise } from 'most';
import { select, Epic } from 'redux-most';

import * as D from '../../definitions';
import { boughtProducts } from '../../apis/product';

export const BOUGHT_PRODUCTS = 'BOUGHT_PRODUCTS';
export const BOUGHT_PRODUCTS_SUC = 'BOUGHT_PRODUCTS_SUC';
export const BOUGHT_PRODUCTS_FAIL = 'BOUGHT_PRODUCTS_FAIL';

export const boughtProductsAction = (user: D.User): D.ProductsAction => ({ type: BOUGHT_PRODUCTS, payload: user});

const boughtProductsEpic: Epic<D.GeneralAction> = (action$ => action$.thru(select(BOUGHT_PRODUCTS))
  .chain((action: D.ProductsAction) => fromPromise(boughtProducts(action.payload.sessionToken)))
  .map((boughtProductsResponse: null | D.Products) => (
    boughtProductsResponse
    ? {type: BOUGHT_PRODUCTS_SUC, success: boughtProductsResponse}
    : {type: BOUGHT_PRODUCTS_FAIL}
  )));

export const epics: Array<Epic<D.GeneralAction>> = [
  boughtProductsEpic,
];
