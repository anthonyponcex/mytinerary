import React, { Component } from 'react';
export default class Card extends Component {
    render() {
        return (
            <span className="owl-item">       
                <div className="owl-item-content">
                    <p className="owl-item-title">Paris, France</p>
                    <p className="owl-item-date text-center">07/29/17 - 08/07/17</p>
                <hr />
                <div className="row user">
                        <div className="col-md-3">
                    <p className="owl-item-username"><img src="https://media.creativemornings.com/uploads/user/avatar/120448/profile-circle.png" id="user-icon" /></p>
                        </div>
                        <div className="col-md-9">
                            @freespirit
                    <br />Day 2 of 10
                        </div>
                </div>
                    <p className="owl-item-timeago">Updated 2 days ago</p>
                </div>
    
            </span> 
             );
    }
}