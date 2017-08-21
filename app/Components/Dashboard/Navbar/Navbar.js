import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler">
                        {/*<img src="" id="user-icon" />*/}
                    </span>
                </button>
   
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#" onClick="">Following</a>
                        <a className="nav-item nav-link" href="#" onClick="">Followers</a>
                        <a className="nav-item nav-link" href="#" onClick="">My Profile</a>
                        <a className="nav-item nav-link" href="#" onClick="">Logout</a>
                        <a className="nav-item nav-link" href="#" onClick="">CREATE</a>
                    </div>
                </div>
                <a className="navbar-brand" href="#">MyTinerary</a>
     
            </nav>
            
                );
    }
}