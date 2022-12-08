import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavLink({ children, to, active }) {

    const [navMenu, setNavMenu] = useState(false);

    return (
        <Link className={'text-white hover:text-purleHaze hover:cursor-pointer'} 
            to={to}>
            {children}
        </Link>
    )
}