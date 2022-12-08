import { Link } from "react-router-dom";

export default function NavLinkRounded({ children, to }) {
    return (
        <Link className={'py-2 px-6 rounded-full bg-gradient-to-b from-purpleHaze to-purpleRim hover:cursor-pointer'} to={to}>
            {children}
        </Link>
    )
}