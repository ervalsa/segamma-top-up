import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

export default function NavLink({ children, to, className }) {
    const isActive = useLocation().pathname == to;

    return (
        <Link
            className={`${className} "text-white hover:text-purpleHaze hover:cursor-pointer" ${isActive ? "text-purpleHaze" : "text-white"} `}
            to={to}
        >
            {children}
        </Link>
    );
}
