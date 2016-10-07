import React from 'react';
import FeaturedProduct from './FeaturedProduct';
import ProductList from './ProductList';

class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        debugger;
        const products = data['products'];

        return (
        	<div>
        		<FeaturedProduct />
        		<ProductList data={products} />
        	</div>
        	);
    }
}

export default Home;
