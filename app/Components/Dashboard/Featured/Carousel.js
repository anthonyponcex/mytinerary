import React, { Component } from 'react';
import Card from './Card';

export default class Carousel extends Component {
    render() {
        return (
            <div className="owl-carousel owl-theme">
                <Card />
            </div>
            
        );
    }
}