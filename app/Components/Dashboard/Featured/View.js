import React, { Component } from 'react';
import Carousel from './Carousel';
import Card from './Card';

export default class Featured extends Component {
    render() {
        return (        
        <div className="container-fluid featured">
            <h1>Featured</h1>
           <Carousel />
        </div> 
                    

        );
    }
}