import { NavLink } from "react-router-dom"

import { mainNav } from "../../../helpers/navigation" 

export const HeaderNav = () => {
    return (
        <>  
            <ul>
                {mainNav.map(({id, href, text}) => <li key={id}>
                    <NavLink to={href}>
                        {text}
                    </NavLink>
                </li>)}
            </ul>
        </>
    )
}