import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import * as Components from '../../../components';

import './PublishProduct.css';
import { uploadProductImage } from '../../../modules/publishProduct/actions';
import { ImageUploader } from '../../../components/ImageUploader/ImageUploader';

interface HomePageProps extends DispatchProp<void>, RouteComponentProps<void> {
    user: D.User;
    uploadProductImage: (user: D.User, fileData: string) => void;
}

class PublishProduct extends React.Component<HomePageProps> {
    _uploadImage = () => {
        return (user: D.User, fileData: string) =>
            ({});
    }
    _publishProd = () => {
        return;
    }

    render() {
        return (
            <div className="publishProduct">
                <Components.Header closeIcon={true} headerContext="发布宝贝" />
                <div>
                    <div className="publish__uploader">
                        <ImageUploader uploadImage={this._uploadImage()} />
                    </div>
                    <div className="publish__input-group">
                        <Components.Input mask={false} placeholder="商品名称" className="input-group__input" />
                        <Components.Input mask={false} placeholder="售价￥" className="input-group__input" />
                        <Components.ProductDescribeBox className="input-group__textarea" />
                        <div className="input-group__button">
                            <Components.ButtonWithColor buttonContent="开始出售" onClick={this._publishProd}/>
                        </div>

                    </div>
                </div>
                <Components.Footer />
            </div>
        );
    }
}

function mapStateToProps(state: D.RootState<object>) {
    return {
        user: state.user,
        products: state.homeProducts.products,
    };
}

function mapDispatchToProps(dispatch: (actions: {}) => void) {
    return {
        uploadProductImage: (user: D.User, fileData: string) => dispatch(uploadProductImage(user, fileData)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishProduct);