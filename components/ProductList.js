import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
    constructor() {
        super();
    }
    render() {
    	const product1 = {
    		title: 'Product 1',
    		excerpt: 'Product 1 summary',
    		img: {
    			src: 'product1.jpg',
    			alt: 'Product 1'
    		}
    	};
    	const product2 = {
    		title: 'Product 2',
    		excerpt: 'Product 2 summary',
    		img: {
    			src: 'product2.jpg',
    			alt: 'Product 2'
    		}
    	};
    	const product3 = {
    		title: 'Product 3',
    		excerpt: 'Product 3 summary',
    		img: {
    			src: 'product3.jpg',
    			alt: 'Product 3'
    		}
    	};

        return (
        	<div>
        		<Product {...product1} />
        		<Product {...product2} />
        		<Product {...product3} />
        	</div>
        	);
    }
}

export default ProductList;
