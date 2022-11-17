import { NavLink, useMatch } from "react-router-dom";

const CustomLink=({children, to})=>{
    useMatch(
        {
            path: to,
            end: to.lenght===1
        }
    )
    return(
        <NavLink to={to}>{children} </NavLink>
    )
}

export default CustomLink