import React, { Component } from 'react';
import Caro-Card from './Caro-Card'
import styles from './css/card';


export default class Carousel extends Component {
    render() {
        return (
        <div className="row featured">
            <Carousel>
                <CaroCard />
            </Carousel>
        </div>
        );
    }
}

