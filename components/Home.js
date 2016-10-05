import React from 'react';
import FeaturedProduct from './FeaturedProduct';
import ProductList from './ProductList';

class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
        	<div>
        		<FeaturedProduct />
        		<ProductList />
        	</div>
        	);
    }
}

export default Home;
