import React, { Component } from 'react';
import styles from '../style.css'

export default class Card extends Component {
    render() {
        return (
                <div className="col-6 col-md-4">
                    <div className="card">   
                        I am a card.
                    </div>
                </div>
            
        );
    }
}