import React from 'react';
import Product from './Product';

class FeaturedProduct extends React.Component {

    constructor() {
        super();
    }

    render() {
         const featuredProduct = {
            img: {
                src: 'featured.jpg',
                alt: 'featured'
            },
            title: 'Featured Product',
            excerpt: 'Featured product excerpt'
        };
        return (
            <Product {...featuredProduct} className={'featured-product'} />
        );
    }
}

export default FeaturedProduct;
