import React, { Component } from 'react';

class Category extends Component {
    title;

    constructor(props) {
        super(props);

        this.state = {
            city: 'London',
            country: 'uk',
            temperature: 0,
            humidity: 0,
            title: props.title
     }
    }

    render() {
        return (
            <div>
                <h2> dami{ this.state.title }</h2>
            </div>
        );
    }
}


export default Category;