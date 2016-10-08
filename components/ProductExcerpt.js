import React from 'react';
import { Link } from 'react-router';


class ProductExcerpt extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
			<div className={`product ${this.props.className || ''} `}>
        		<Link to={`/product/${this.props.slug}`}>
        			<img src={this.props.img.src} alt={this.props.img.alt} />
        			<h1>{this.props.title}</h1>
        			<p>{this.props.excerpt}</p>
        		</Link>
        	</div>
        );
    }
}

export default ProductExcerpt;
