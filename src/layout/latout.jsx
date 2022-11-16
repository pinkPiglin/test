import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import  clases from'./layout.module.scss';
import { useAuth } from '../hook/useAuth';

const Layout = ()=>{
   const user = useAuth();
   console.log(user)
    return(
      <>
        <header className={clases.header}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/about'>About</NavLink>
            {user.auth? 
            (<div className={clases.singOut}>
              <h3>{user.userName}</h3>
              <button className={clases.buttonLogIn} onClick={user.singOut}>Sign Out</button>
            </div>
            
            )
            
            : (
              <div className={clases.singIn}>
                 <button><NavLink className={clases.buttonLogOut} to='login'>Sign In</NavLink></button>
              </div>
               
              )}
        </header>

        <Outlet/>
      </>
    )
}

export default Layout