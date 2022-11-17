import React from 'react';
import {Outlet} from 'react-router-dom';
import  './layout.scss';
import { useAuth } from '../hook/useAuth';
import CustomLink from '../components/CustomLink';

const Layout = ()=>{
   const user = useAuth();
   console.log(user)
    return(
      <>
        <header className='header'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='posts'>Posts</CustomLink>
            <CustomLink to='about'>About</CustomLink>
            {user.auth? 
            (<div className='singOut'>
              <h3>{user.userName}</h3>
              <button className='buttonLogIn' onClick={user.singOut}>Sign Out</button>
            </div>
            
            )
            
            : (
              <div className='singIn'>
                 <button><CustomLink className='buttonLogOut' to='login'>Sign In</CustomLink></button>
              </div>
               
              )}
        </header>

        <Outlet/>
      </>
    )
}

export default Layout