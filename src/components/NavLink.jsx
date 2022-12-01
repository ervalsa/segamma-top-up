import { Link } from "react-router-dom";

export default function NavLink({ children, to }) {
    return (
        <Link className={'hover:text-purleHaze hover:cursor-pointer hover:underline'} to={to}>
            {children}
        </Link>
    )
}