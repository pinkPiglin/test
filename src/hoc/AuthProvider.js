
import { createContext,   useState } from "react";

export const AuthContext = createContext(false);

export const AuthProvider =({children})=>{
    const users=[
        {
            login:'admin',
            password:'admin', 
            name:'Administrator'
        },
        {
            login:'login',
            password:'password',
            name:'User123'
        }
    ]

    const [userName, setUser] = useState('');
    const [auth, setAuth] = useState(false);
    const [validity, setValidity] = useState(true);

    const value = {userName, auth,validity, singIn, singOut};


    function singIn(loginValue, passwordValue, cb){
        for(let i=0; i<users.length &&  i!== 'stop'; i++){
            let user = users[i];
            if(user.login===loginValue && user.password=== passwordValue){
                setUser(user.name);
                setAuth(true);
                setValidity(true);
                i='stop';
                cb();
            }
            else{
                setValidity(false);
            }
        }
    }

    function singOut(){
        setAuth(false);
        setUser('');
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


