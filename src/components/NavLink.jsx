export default function NavLink({ href, active, children }) {
    return (
        <p className={'hover:text-purleHaze hover:cursor-pointer hover:underline'}>
            {children}
        </p>
    )
}