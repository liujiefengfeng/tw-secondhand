import * as React from 'react';
import * as _ from 'lodash';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as classNames from 'classnames';
import * as D from '../../../definitions';
import { Product, Header, Footer, ProductDetailsPopup } from '../../../components';

import './HomePage.css';
import { getHomeProducts } from '../../../modules/home/actions';
import FooterMeum from '../../../components/Footer/FooterMenu';

interface HomePageProps extends DispatchProp<void>, RouteComponentProps<void> {
    products: D.ProductDetail[];
    getHomeProducts: typeof getHomeProducts;
}

interface HomePageStates {
    isUserLogin: boolean;
    displayProduct: object;
    showProductDetail: boolean;
}

class HomePage extends React.Component<HomePageProps, HomePageStates> {
    constructor(props: HomePageProps) {
        super(props);
        this.state = {
            isUserLogin: false,
            displayProduct: {},
            showProductDetail: false
        };
    }
    
    componentDidMount() {
        this.props.getHomeProducts();
    }
    
    clickProductItem = (productIndex) => {
        this.setState({
            displayProduct: this.props.products[productIndex],
            showProductDetail: true
        });
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
        const {showProductDetail} = this.state;
        
        return (
          <div className="HomeAndPopup">
              <div className={classNames('Home', {'hidden-home': showProductDetail})} >
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
          </div>
        );
    }
}

function mapStateToProps(state: D.RootState<object>) {
    return {
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);