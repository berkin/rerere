import React from 'react';

class FeaturedProduct extends React.Component {

    constructor() {
        super();

        this.state = {
			img: {
				src: 'featured.jpg',
				alt: 'featured'
			},
			title: 'Featured Product',
			excerpt: 'Featured product excerpt'
		};
    }

    render() {
        return (
        	<div>
        		<img src={this.state.img.src} alt={this.state.img.alt} />
        		<h1>{this.state.title}</h1>
        		<p>{this.state.excerpt}</p>
        	</div>
        );
    }
}

export default FeaturedProduct;
