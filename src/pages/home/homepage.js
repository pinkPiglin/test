import { useAuth } from "../../hook/useAuth"
const HomePage=()=>{
    console.log(useAuth())
    return(
        <div>
            <h1>Home Page</h1>
        </div>
    )
   
}

export default HomePage