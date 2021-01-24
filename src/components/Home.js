import React from 'react'
import { Grid } from '@material-ui/core';
import SideBar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Grid direction="row" justify="center" container spacing={0}>
                <Grid item xs={2} sm={2} md={3} >
                    <SideBar />
                </Grid>
                <Grid item xs={10} sm={10} md={5}>
                    <Feed />
                </Grid>
                <Grid item  md={4}>
                    <Widgets />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
