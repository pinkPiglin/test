import {Navigate, useLocation} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RequireAuth=({children})=> {

    const ctx = useAuth()
    const location =  useLocation();
    console.log(location);
    if(!ctx.auth){
       return  <Navigate to='/login' state={{from:location}}/> 
    }
    return children;
}

export default RequireAuth