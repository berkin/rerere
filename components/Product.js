import React from 'react';

class Product extends React.Component {
    constructor() {
        super();
    }

    render() {
        let item;
        data['products'].forEach((product) => {
            if ( product.slug === this.props.params.slug ) {
                item = product;
            }
        });
        
        return (
        	<div className='product-detail'>
    			<img src={item.img.src} alt={item.img.alt} />
    			<h1>{item.title}</h1>
    			<p>{item.excerpt}</p>
                <div>
                    {item.description}
                </div>
        	</div>
        );
    }
}

export default Product;
