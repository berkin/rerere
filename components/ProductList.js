import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
    constructor() {
        super();
    }
    render() {
    	const nodes = this.props.data.map((product) => { return <Product {...product} /> });

        return (
        	<div>
        		{nodes}
        	</div>
        	);
    }
}

export default ProductList;
