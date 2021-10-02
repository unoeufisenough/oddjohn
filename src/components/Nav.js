import React, { useState } from 'react'
import '../style/nav.css'
import { NavLink } from 'react-router-dom'
import { Grid, Box } from "@material-ui/core";

function Nav({pageTitleName}) {

   const [titleActive, setTitleActive] = useState("");
   
    

    return (
        <nav className='nav'>
            <Grid container >
                <Grid item container>
                <Grid item xs={0} sm={2} />
            <NavLink  to='/'>
            <img className="nav__logo"
                src="/ojLogo.png"
                alt="logo"
            />
            </NavLink>
            
            
            <ul className="nav__options">
                <li className="nav__option"><NavLink to='/'  isActive={(match, pageTitleName) => {if (!match) {return false;} console.log(pageTitleName.pathname)}} activeClassName="nav__optionActive" ><Box className="nav__optionName" pr={2} pl={2}>Home</Box></NavLink></li>
                <li className="nav__option"><NavLink to='/Work'activeClassName="nav__optionActive" ><Box className="nav__optionName" pr={2} pl={2}>Work</Box></NavLink></li>
                <li className="nav__option"><NavLink to='/Art' activeClassName="nav__optionActive" ><Box className="nav__optionName" pr={2} pl={2}>Art</Box></NavLink></li>
                <li className="nav__option"><NavLink to='/About' activeClassName="nav__optionActive" ><Box className="nav__optionName" pr={2} pl={2}>About</Box></NavLink></li>
            </ul>
           
                </Grid>
            </Grid>
        </nav>
    )
}

export default Nav
