import './loginPage.scss';
import React from 'react';
import { useLocation} from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

const LoginPage=()=>{
    
    const location = useLocation();
    const context = useAuth();

    const fromPage = location.state?.from?.pathname || '/'
    
    function logIn(event){
        event.preventDefault();
        
        const form = event.target;
        context.singIn(form.login.value, form.password.value, fromPage);

        if(context.validity===false){
            form.login.setCustomValidity("Пароль или логин не верный");
            return
        }
    }

    
    return(
        <form  className='loginForm' onSubmit={(event)=>logIn(event)}>
            <h1>Login</h1>
            <div className='login'>
                 <input name='login' type="login" placeholder='username' required/>
            </div>

            <div className='password'>
                <input name='password' type="password"placeholder='password' required/> 
            </div>

            <button  type='submit'>Login</button>
        </form>
    )
}

export default LoginPage;