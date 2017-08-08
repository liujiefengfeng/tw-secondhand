import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { goBack } from 'react-router-redux';

import * as D from '../../../definitions';
import { Header, Footer, Product } from '../../../components';
import { soldProductsAction } from '../../../modules/products/actions';
import './SoldProductsPage.css';

type SoldProductPageProps = DispatchProp<void> & RouteComponentProps<void> & {
  user: D.UserState;
  soldProducts: D.ProductsState;
};

class SoldProductPage extends React.Component<SoldProductPageProps> {
  componentDidMount() {
    const { dispatch, user } = this.props;
    dispatch(soldProductsAction(user));
  }

  _renderProductsList() {
    const {soldProducts} = this.props;
    return (
      <div className="content">
        {
          soldProducts &&
          soldProducts.map((product, index) => {
            const productProps = {
              title: product.name,
              image: product.img,
              price: product.price,
              owner: product.owner.username
            };
            return <Product {...productProps} key={index}/>;
          })
        }
      </div>
    );
  }
  render() {
    return (
      <div className="sold-products">
        <Header goBackIcon={true} headerContext="出售宝贝" onClick={goBack}/>
        {this._renderProductsList()}
        <Footer activeMenu={2} />
      </div>
    );
  }
}

export default connect(
  (state: D.RootState<object>) => ({user: state.user, soldProducts: state.soldProducts})
)(SoldProductPage);
