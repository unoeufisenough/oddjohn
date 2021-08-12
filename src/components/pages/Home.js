import React from 'react'
import Nav from '../Nav';
import Footer from '../Footer';
import PageTitle from '../PageTitle';
import { Grid } from "@material-ui/core";

function Home() {
    return (
        <div className="home">
            <Grid container direction="column">
                <Grid item>
                     <Nav />
                </Grid>

                <Grid item container>
                    <Grid item xs={0} sm={2} />
                        <Grid item xs={12} sm={8}>
                            <PageTitle />
                        </Grid>
                    <Grid item xs={0} sm={2} />                
                    <Footer />
                </Grid>  
            </Grid>     
        </div>
    )
}

export default Home
