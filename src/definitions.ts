import * as Redux from 'redux';
import * as ReactRouter from 'react-router';

// This file holds our app typings

// BUSINESS LOGIC
export interface App {
    loading: boolean;
    logined: boolean;
}

export interface User {
    username: string;
    sessionToken: string;
}

export interface UserProfile {
    id?: string;
    email: string;
}

export interface UserForLogin {
    username: string;
    password: string;
}

export interface CreatedUser {
  username: string;
  objectId: string;
}

export interface Product {
  img: string;
  name: string;
  price: string;
  owner?: CreatedUser;
  buyer?: CreatedUser;
  description: string;
}

export type Products = Array<Product>;

export type HomeProducts = {
    products: Product[]
};

// ACTION CREATORS

// ACTIONS
export interface GeneralAction extends Redux.Action {
    payload?: object;
}
export interface UserAction extends GeneralAction {
    payload?: UserForLogin;
}
export interface FetchHomeProductsAction extends GeneralAction {
    payload?: Product[];
}

export interface ProductsAction extends GeneralAction {
  payload?: User;
  success?: Product[];
  error?: string;
}

// STATES
export type AppState = App;
export type UserState = User;
export type ProductsState = Products;
export type HomeProductsState = HomeProducts;

export interface RootState<S> {
    user?: UserState;
    app?: AppState;
    boughtProducts?: ProductsState;
    soldProducts?: ProductsState;
    homeProducts?: HomeProductsState;
    router?: ReactRouter.RouteComponentProps<S>;
}
