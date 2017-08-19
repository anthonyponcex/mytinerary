import React, { Component } from 'react';
import styles from './css/card';

export default class CaroCard extends Component {
    render() {
        return (
            <span className="owl-item">       
                <div className="content">
                    <p className="title">Australia</p>
                    <span className="username"> <img src="https://media.creativemornings.com/uploads/user/avatar/120448/profile-circle.png" id="user-icon">@freeerspirit</p>
                    <hr />
                    <p className="timeago">Updated 2 days ago</p>
                </div>    
            </span>
            
        );
    }
}