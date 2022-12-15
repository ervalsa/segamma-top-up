import { Link } from "react-router-dom";

export default function NavLinkRounded({ children, to, className }) {
    return (
        <Link className={`${className} py-2 px-6 text-center rounded-full bg-gradient-to-b from-purpleHaze to-purpleRim hover:cursor-pointer`} to={to}>
            {children}
        </Link>
    );
}
