import React, { Component } from 'react';
import Card from '../Itinerary/sub/Card'

export default class Landing extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hello World</h1>
                <div className="row">
                    <Card /><Card />
                </div>
                
            </div>
            

        );
    }
}