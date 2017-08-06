import * as D from '../../definitions';
import * as Redux from 'redux';

const initialState: D.ProductsState = [];

const productsReducer: Redux.Reducer<D.ProductsState> =
  (state: D.ProductsState, action: D.ProductsAction): D.ProductsState => {
  state = state || initialState;
  switch (action.type) {
    case 'BOUGHT_PRODUCTS_SUC':
    case 'SOLD_PRODUCTS_SUC':
    {
      return action.success;
    }
    default:
  }
  return state;
};

export default productsReducer;
