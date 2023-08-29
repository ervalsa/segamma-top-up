import React from "react";
import { useState } from "react";
import NavLink from "./NavLink.jsx";
import NavLinkRounded from "./NavLinkRounded.jsx";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Navbar({ children }) {
    const [sidebar, setSidebar] = useState(false);

    return (
        <header className='bg-lightGray py-5'>
            <nav className='container'>
                <div className='mx-5 lg:mx-0 flex items-center text center justify-between text-white'>
                    {/* Hamburger Button */}
                    <button className={sidebar ? 'block lg:hidden' : 'block lg:hidden'} onClick={() => {
                        setSidebar(!sidebar)
                    }}>
                        <HiOutlineMenu className="h-8 w-8"/>
                    </button>

                    <img className='lg:ml-0 h-10 w-10 hover:cursor-pointer' src='../assets/logo.png' alt="Segamma Logo"/>

                    {/* Desktop */}
                    <div className={sidebar ? 'fixed z-50 flex flex-col w-screen h-screen top-0 left-0 justify-center items-center gap-y-7 bg-darkBlue' : 'hidden lg:flex items-center gap-x-12'}>
                        <button className={sidebar ? 'block lg:hidden' : 'block lg:hidden'} onClick={() => {
                            setSidebar(!sidebar)
                        }}>
                            <HiOutlineX className="h-8 w-8"/>
                        </button>
                        <NavLink to={'/'}>Home</NavLink>
                        <Popover className="relative">
                            <Popover.Button className="flex justify-center items-center gap-x-3">
                                Games
                                <ChevronDownIcon className='h-6 w-6'/>
                            </Popover.Button>
                            <Popover.Panel className="absolute z-20 top-10 -left-9">
                                <div className="md:w-[300px] px-10 py-5 flex flex-col gap-y-4 bg-darkGray rounded-lg">
                                    <NavLink className="py-2" to={'/games-mobile'}>Game Mobile</NavLink>
                                    <NavLink className="py-2" to={'/games-pc'}>Game PC</NavLink>
                                </div>
                            </Popover.Panel>
                        </Popover>
                        {/* <NavLink to={'/games'}>Games</NavLink> */}
                        <NavLink to={'/promo'}>Promo</NavLink>
                        <NavLink to={'/bantuan'}>Bantuan</NavLink>
                        <NavLink to={'/tentang-kami'}>Tentang Kami</NavLink>
                        <NavLink className="block lg:hidden" to='/login'>Masuk</NavLink>
                    </div>
                    
                    <div className='flex items-center gap-x-8 mr-5 lg:m-0'>
                        <NavLink className="hidden lg:block" to='/login'>Masuk</NavLink>
                        <NavLinkRounded to={'/register'}>Daftar</NavLinkRounded>
                    </div>
                </div>
            </nav>
        </header>
    )
}