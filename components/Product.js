import React from 'react';

class Product extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
        	<div className={`product ${this.props.className || ''} `}>
        		<img src={this.props.img.src} alt={this.props.img.alt} />
        		<h1>{this.props.title}</h1>
        		<p>{this.props.excerpt}</p>
        	</div>
        );
    }
}

export default Product;
