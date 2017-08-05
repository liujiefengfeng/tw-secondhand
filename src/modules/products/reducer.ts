import * as D from '../../definitions';
import * as Redux from 'redux';

const initialState: D.ProductsState = [];

const productsReducer: Redux.Reducer<D.ProductsState> =
  (state: D.ProductsState, action: D.ProductsAction): D.ProductsState => {
  state = state || initialState;
  switch (action.type) {
    case 'BOUGHT_PRODUCTS_SUC': {
      const boughtProducts = action.success.map(product => {
          const {owner, buyer, ...others} = product;
          return {
            user: owner.username,
            ...others
          };
        });
      return boughtProducts;
    }
    default:
  }
  return state;
};

export default productsReducer;
