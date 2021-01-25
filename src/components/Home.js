import React from 'react'
import SideBar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__gridContainer">
                <div className="home__sidebar" >
                    <SideBar />
                </div>
                <div className="home__feed">
                    <Feed />
                </div>
                <div className="home__widgets">
                    <Widgets />
                </div>
            </div>
        </div>
    )
}

export default Home
