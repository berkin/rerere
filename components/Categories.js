import React from 'react';

class Categories extends React.Component {
    constructor() {
        super();
    }
    render() {
    	const nodes = data['categories'].map((category) => { return <div key={category.id}>{category.name}</div> });
        return (
        	<div>
        	{nodes}
        	</div>
        	);
    }
}

export default Categories;
