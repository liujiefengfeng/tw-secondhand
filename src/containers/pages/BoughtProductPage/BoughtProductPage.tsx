import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { goBack } from 'react-router-redux';

import * as D from '../../../definitions';
import { Header, Footer, Product } from '../../../components';
import { boughtProductsAction } from '../../../modules/products/actions';
import './BoughtProductPage.css';

type BoughtProductPageProps = DispatchProp<void> & RouteComponentProps<void> & {
  user: D.UserState;
  boughtProducts: D.ProductsState;
};

class BoughtProductPage extends React.Component<BoughtProductPageProps> {
  componentDidMount() {
    const { dispatch, user } = this.props;
    dispatch(boughtProductsAction(user));
  }

  _renderProductsList() {
    const {boughtProducts} = this.props;
    return (
      <div className="content">
        { boughtProducts &&
          boughtProducts.map((product, index) => {
            const productProps = {
              title: product.name,
              img: product.img,
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
      <div className="bought-products">
        <Header goBackIcon={true} headerContext="已买宝贝" onClick={() => this.props.dispatch(goBack())}/>
        {this._renderProductsList()}
        <Footer activeMenu={2} />
      </div>
    );
  }
}

export default connect(
  (state: D.RootState<object>) => ({user: state.user, boughtProducts: state.boughtProducts})
)(BoughtProductPage);
