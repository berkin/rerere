import React from 'react';
import ProductExcerpt from './ProductExcerpt';

class FeaturedProduct extends React.Component {

    constructor() {
        super();
    }

    render() {
        let featuredProduct;
        data['products'].forEach((product) => {
            if ( product.featured === true ) {
                featuredProduct = product;
            }
        });

        return (
            <ProductExcerpt {...featuredProduct} className={'featured-product'} />
        );
    }
}

export default FeaturedProduct;
