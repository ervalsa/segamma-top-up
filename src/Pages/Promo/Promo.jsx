import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout.jsx";
import { FaTelegramPlane } from "react-icons/fa";

export default function Promo() {

    useEffect(() => {
        document.title = "Segamma | Promo";
    }, []);

    return (
        <AppLayout>
            <div className="relative h-[300px] font-inter">
                <img className="absolute h-full object-cover top-0 left-0 w-screen opacity-40" src="/assets/banner_promo.svg" alt="Banner Promo" />
                <div className="absolute w-full h-full flex flex-col justify-center items-center gap-y-4 text-white z-10">
                    <h1 className="text-3xl font-bold">Promo</h1>
                    <p className="text-center px-6">Dapatkan penawaran promo menarik, jangan sampai kelewatan!</p> 
                    <form className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4" action="">
                        <input className="bg-lightGray px-8 py-4 rounded-full focus:outline-none focus:ring focus:ring-purpleHaze" type="text" placeholder="Alamat email anda"/>

                        <button className="px-8 py-4 flex gap-x-3 justify-center items-center rounded-full bg-gradient-to-b from-purpleHaze to-purpleRim font-bold" type="submit">
                            <span><FaTelegramPlane className="h-6 w-6"/></span> Berlangganan
                        </button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
