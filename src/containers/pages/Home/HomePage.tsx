import * as React from 'react';
import * as _ from 'lodash';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from 'react-router';

import * as classNames from 'classnames';
import * as D from '../../../definitions';
import {Product, Header, Footer, ProductDetailsPopup, LoginPopup, RegisterPopup} from '../../../components';

import './HomePage.css';
import {getHomeProducts} from '../../../modules/home/actions';
import {userLogin, userRegister} from '../../../modules/user/actions';
import FooterMeum from '../../../components/Footer/FooterMenu';

interface HomePageProps extends DispatchProp<void>, RouteComponentProps<void> {
  isUserLogin: boolean;
  products: D.ProductDetail[];
  getHomeProducts: typeof getHomeProducts;
  userLogin: (username: string, password: string) => void;
  userRegister: (username: string, password: string) => void;
}

interface HomePageStates {
  displayProduct: D.ProductDetail;
  showProductDetail: boolean;
  showLogin: boolean;
  showRegister: boolean;
}

class HomePage extends React.Component<HomePageProps, HomePageStates> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      displayProduct: null,
      showProductDetail: false,
      showLogin: false,
      showRegister: false
    };
  }

  componentDidMount() {
    this.props.getHomeProducts();
  }

  componentWillReceiveProps(nextProps: HomePageProps) {
    if (nextProps.isUserLogin !== this.props.isUserLogin) {
      this.setState({
        showProductDetail: false,
        showLogin: false,
        showRegister: false
      });
    }
  }

  clickProductItem(productIndex){
    const {isUserLogin} = this.props;
    if (isUserLogin) {
      this.setState({
        displayProduct: this.props.products[productIndex],
        showProductDetail: true
      });
    } else {
      this.setState({
        showLogin: true
      });
    }
  }

  renderProdcutList() {
    return this.props.products
      && this.props.products.map((product: D.ProductDetail, index: number) => {
        return (
          <Product { ...product }
                   isClosed={ false }
                   key={ index }
                   onClick={ () => this.clickProductItem(index) }
          />
        );
      });
  }

  render() {
    const {showProductDetail, displayProduct, showLogin, showRegister} = this.state;
    const {userLogin, userRegister} = this.props;
    return (
      <div className="HomeAndPopup">
        <div className={classNames('Home', {'hidden-home': showProductDetail || showLogin || showRegister})}>
          <Header goBackIcon={false} headerContext="精选"/>
          <div className="Home__body">
            {this.renderProdcutList()}
          </div>
          <Footer activeMenu={FooterMeum.Home}/>
        </div>
        {showProductDetail &&
        <ProductDetailsPopup
          details={{
            img: displayProduct.img,
            title: displayProduct.title,
            price: displayProduct.price,
            owner: displayProduct.owner,
            details: displayProduct.details,
            onClick: () => {
            }
          }}
          isActive={showProductDetail}
          onIconClick={() => this.setState({showProductDetail: false})}
        />
        }
        {
          this.state.showLogin
            ? <LoginPopup
                onSubmit={userLogin}
                isActive={true}
                goToRegister={() => this.setState({showLogin: false, showRegister: true})}
                onIconClick={() => this.setState({showLogin: false})}
              />
            : this.state.showRegister
            ? <RegisterPopup
                onSubmit={userRegister}
                isActive={true}
                onIconClick={() => this.setState({showRegister: false})}
              />
            : null
        }
      </div>
    );
  }
}

function mapStateToProps(state: D.RootState<object>) {
  return {
    isUserLogin: !!state.user.sessionToken,
    products: _.map(state.homeProducts.products, product => (
      {
        img: product.img,
        title: product.name,
        price: product.price,
        owner: product.owner.username,
        details: product.description
      }
    ))
  };
}

function mapDispatchToProps(dispatch: (actions: {}) => void) {
  return {
    getHomeProducts: () => dispatch(getHomeProducts()),
    userLogin: (username: string, password: string) => {
      const user: D.UserForLogin = {username, password};
      dispatch(userLogin(user))
    },
    userRegister: (username: string, password: string) => {
      const user: D.UserForLogin = {username, password};
      dispatch(userRegister(user))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
