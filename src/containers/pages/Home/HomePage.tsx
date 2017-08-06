import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import * as Components from '../../../components';

import './HomePage.css';
import { getHomeProducts } from '../../../modules/home/actions';
import FooterMeum from '../../../components/Footer/FooterMenu';

interface HomePageProps extends DispatchProp<void>, RouteComponentProps<void> {
    products: D.Product[];
    getHomeProducts: typeof getHomeProducts;
}

class HomePage extends React.Component<HomePageProps> {
    componentDidMount() {
        this.props.getHomeProducts();
    }

    renderProdcutList = () => {
        return this.props.products 
        && this.props.products.map((product: D.Product, index: number) => {
            const { name, img, price, owner } = product;
            return (
                // tslint:disable-next-line:max-line-length
                <Components.Product title={name} image={img} price={price} owner={owner.username} isClosed={false} key={index} />
            );
        });
    }

    render() {
        return (
            <div className="Home">
                <Components.Header goBackIcon={false} headerContext="精选" />
                <div className="Home__body">
                    {this.renderProdcutList()}
                </div>
                <Components.Footer activeMenu={FooterMeum.Home} />
            </div>
        );
    }
}

function mapStateToProps(state: D.RootState<object>) {
    return {
        products: state.homeProducts.products
    };
}

function mapDispatchToProps(dispatch: (actions: {}) => void) {
    return {
        getHomeProducts: () => dispatch(getHomeProducts()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);