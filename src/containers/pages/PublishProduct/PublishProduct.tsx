import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import * as Components from '../../../components';

import './PublishProduct.css';
import { uploadProductImage, publishProduct } from '../../../modules/publishProduct/actions';
import { ImageUploader } from '../../../components/ImageUploader/ImageUploader';

interface PublishProductPageProps extends DispatchProp<void>, RouteComponentProps<void> {
    user: D.User;
    currentImageUrl: string;
    uploadProductImage: typeof uploadProductImage;
    publishProduct: typeof publishProduct;
}

class PublishProduct extends React.Component<PublishProductPageProps, D.DraftProduct> {
    constructor(props: PublishProductPageProps) {
        super(props);
        this.state = {
            name: '',
            price: '',
            img: '',
            description: '',
        };
    }
    _uploadImage = (fileData: string) => {
        this.props.uploadProductImage(this.props.user, fileData);
    }
    _publishProd = () => {
        const product = {
            ...this.state,
            img: this.props.currentImageUrl
        };
        this.props.publishProduct(this.props.user, product);
    }

    render() {
        return (
            <div className="publishProduct">
                <Components.Header closeIcon={true} headerContext="发布宝贝" />
                <div>
                    <div className="publish__uploader">
                        <ImageUploader 
                            uploadImage={this._uploadImage} 
                        />
                    </div>
                    <div className="publish__input-group">
                        <Components.Input 
                            mask={false} 
                            placeholder="商品名称" 
                            className="input-group__input"  
                            onChange={e => this.setState({name: e.target.value})}
                        />
                        <Components.Input 
                            mask={false}    
                            placeholder="售价￥" 
                            className="input-group__input" 
                            onChange={e => this.setState({price: e.target.value})}
                        />
                        <Components.ProductDescribeBox 
                            className="input-group__textarea" 
                            onChange={e => this.setState({description: e.target.value})}
                        />
                        <div className="input-group__button">
                            <Components.ButtonWithColor 
                                buttonContent="开始出售" 
                                onClick={this._publishProd}
                            />
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
        currentImageUrl: state.publishProducts.currentImageUrl,
    };
}

function mapDispatchToProps(dispatch: (actions: {}) => void) {
    return {
        uploadProductImage: (user: D.User, fileData: string) => dispatch(uploadProductImage(user, fileData)),
        publishProduct: (user: D.User, draft: D.DraftProduct) => dispatch(publishProduct(user, draft)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishProduct);