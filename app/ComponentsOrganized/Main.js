import React, { Component } from 'react';
import Navbar
import Carousel from './Carousel';
import InProgress from './InProgress';
import Scroll from './Scroll';
import Footer from './Footer'

export default class Feed extends Component {
    render() {
        return (
            <div className="container-fluid">                 
                <Navbar />  
                          {/*Logo + Search + User Dropdown */}
                          {/*User Drop Down:
                          >My Profile 
                                >
                          >Following
                          >Followers
                          >Settings
                          >Logout
                          >Create     
                            >Form1
                            >Form2
                                >EntryPost                        
                          >Search
                            >User Search
                            >Tag Search
                            >Location Search
                                    
                          */}
                <Featured />  
                            {/*Carousel + Featured*/}
                <InProgress />
                            {/*Caoursel + UserProgress*/}
                            {/*UserProgress (Circle profile pics with progress circle ring around pic, 'day 1 of 10' = 10% done*
                                >Will be able to view entries user has posted so far*/}
                <UserFeed />
                            {/*Cards/ Feed from the users Following - No Carousel - Endless Scroll *like instagram*/}
                <Footer />

            </div>

            

               

        );
    }
}