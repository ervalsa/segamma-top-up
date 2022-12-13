import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout.jsx";

export default function Bantuan() {
    useEffect(() => {
        document.title = "Segamma | Bantuan";
    }, []);

    return (
        <AppLayout>
            <div className="relative h-[300px]">
                <img className="absolute h-full object-cover top-0 left-0 w-screen opacity-40" src="/assets/banner_bantuan.png" alt="Banner Promo" />
                <div className="absolute w-full h-full flex flex-col justify-center items-center gap-y-4 text-white z-10">
                    <h1 className="text-3xl font-bold">Apa yang bisa kami bantu hari ini?</h1>
                    <form className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4" action="">
                        <input className="bg-lightGray px-10 py-4 rounded-full focus:outline-none focus:ring focus:ring-purpleHaze" type="text" placeholder="Mencari jawaban ...."/>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
