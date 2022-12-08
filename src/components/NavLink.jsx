import clsx from "clsx";
import { Link, useLocation} from "react-router-dom";

export default function NavLink({ children, to, active, props}) {

    const isActive = useLocation().pathname == to;

    return (
        <Link className={clsx('text-white hover:text-purpleHaze hover:cursor-pointer', isActive ? 'text-purpleHaze' : 'text-white')} active 
            to={to}>
            {children}
        </Link>
    )
}