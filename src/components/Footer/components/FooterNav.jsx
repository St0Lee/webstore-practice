import { NavLink } from "react-router-dom"

import { footerNav } from "../../../helpers/navigation"

export const FooterNav = () => {
    return (
        <>  
            <ul>
                {footerNav.map(({id, href, text}) => <li key={id}>
                    <NavLink to={href}>
                        {text}
                    </NavLink>
                </li>)}
            </ul>
        </>
    )
}