import React, { Component } from 'react';
export default class Feed extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />

                <div className="row text-center">
                    Filter by:
                    <Dropdown />
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        {/*Map over (8) itinerary cards correlated to destination entered*/}
                        <Card />     
                    </div>
                </div>
        );
    }
}