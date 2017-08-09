import * as React from 'react';
import * as _ from 'lodash';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from 'react-router';

import * as classNames from 'classnames';
import * as D from '../../../definitions';
import {Product, Header, Footer, ProductDetailsPopup, LoginPopup, RegisterPopup} from '../../../components';

import './HomePage.css';
import {getHomeProducts} from '../../../modules/home/actions';
import {userLogin} from '../../../modules/user/actions';
import FooterMeum from '../../../components/Footer/FooterMenu';

interface HomePageProps extends DispatchProp<void>, RouteComponentProps<void> {
  isUserLogin: boolean;
  products: D.ProductDetail[];
  getHomeProducts: typeof getHomeProducts;
  userLogin: any;
}

interface HomePageStates {
  displayProduct: object;
  showProductDetail: boolean;
  showLogin: boolean;
  showRegister: boolean;
}

class HomePage extends React.Component<HomePageProps, HomePageStates> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      displayProduct: {},
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

  clickProductItem = (productIndex) => {
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

  renderProdcutList = () => {
    return this.props.products
      && this.props.products.map((product: D.ProductDetail, index: number) => {
        return (
          // tslint:disable-next-line:max-line-length
          <Product {...product} isClosed={false} key={index} onClick={this.clickProductItem.bind(null, index)}/>
        );
      });
  }

  render() {
    const {showProductDetail, showLogin, showRegister} = this.state;
    const {userLogin} = this.props;
    return (
      <div className="HomeAndPopup">
        <div className={classNames('Home', {'hidden-home': showProductDetail || showLogin || showRegister})}>
          <Header goBackIcon={false} headerContext="精选"/>
          <div className="Home__body">
            {this.renderProdcutList()}
          </div>
          <Footer activeMenu={FooterMeum.Home}/>
        </div>
        <ProductDetailsPopup
          details={{
            img: 'http://ac-o3K0VdL1.clouddn.com/e9dc3c720e46a499714f.jpg',
            title: '战狼2',
            price: '50',
            owner: 'test1',
            details: '电影票',
            onClick: () => {
            }
          }}
          isActive={showProductDetail}
          onIconClick={() => this.setState({showProductDetail: false})}
        />
        {
          this.state.showLogin ? <LoginPopup
            onSubmit={userLogin}
            isActive={true}
            goToRegister={() => this.setState({showLogin: false, showRegister: true})}
            onIconClick={() => this.setState({showLogin: false})}
          /> : this.state.showRegister ? <RegisterPopup
            onSubmit={_.noop}
            isActive={true}
            onIconClick={() => this.setState({showRegister: false})}
          /> : null
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
    userLogin: (User: D.UserForLogin) => dispatch(userLogin(User))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
