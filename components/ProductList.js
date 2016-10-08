import React from 'react';
import ProductExcerpt from './ProductExcerpt';

class ProductList extends React.Component {
    constructor() {
        super();
    }
    render() {
    	const nodes = this.props.data.map((product) => { return <ProductExcerpt key={product.id} {...product} /> });

        return (
        	<div>
        		{nodes}
        	</div>
        	);
    }
}

export default ProductList;
