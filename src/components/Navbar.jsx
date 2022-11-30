import NavLink from "./NavLink.jsx";

export default function Navbar({ children }) {
    return (
        <header className={'bg-lightGray py-5'}>
            <nav className={'container'}>
                <div className={'flex items-center text center w-full justify-between text-white'}>
                    <img src={'../public/assets/logo.png'} alt="Segamma Logo" className={'h-10 w-10 hover:cursor-pointer'}/>
                    <div className={'flex items-center gap-x-12'}>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="games">Games</NavLink>
                        <NavLink>Promo</NavLink>
                        <NavLink>Bantuan</NavLink>
                        <NavLink>Tentang Kami</NavLink>
                    </div>
                    <div className={'flex items-center gap-x-8'}>
                        <p>Masuk</p>
                        <p className={'py-2 px-6 rounded-full bg-gradient-to-b from-purleHaze to-purlerRim hover:cursor-pointer'}>Daftar</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}