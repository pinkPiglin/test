
import { createContext,   useState } from "react";
import { useNavigate } from "react-router-dom";


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
    const [validity, setValidity] = useState(true)
    const value = {userName, auth, validity, singIn, singOut}
    const navigate = useNavigate();

    function singIn(loginValue, passwordValue, fromPage){
        debugger
        users.forEach(user => {
            if(user.login===loginValue && user.password=== passwordValue){
                setUser(user.name);
                setAuth(true);
                setValidity(true)
                navigate(fromPage, {replace:true});
            } 
            else{
                setValidity(false)
                return
            }
        });
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


