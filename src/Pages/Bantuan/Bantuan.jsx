import React, { useEffect } from "react";
import NavLinkRounded from "../../components/NavLinkRounded.jsx";
import AppLayout from "../../layouts/AppLayout.jsx";

export default function Bantuan() {
    useEffect(() => {
        document.title = "Segamma | Bantuan";
    }, []);

    return (
        <AppLayout>
            <div className="relative h-[300px] font-inter">
                <img className="absolute h-full object-cover top-0 left-0 w-screen opacity-40" src="/assets/banner_bantuan.png" alt="Banner Promo" />
                <div className="absolute w-full h-full flex flex-col justify-center items-center gap-y-4 text-white z-10">
                    <h1 className="text-3xl mx-6 font-bold">Apa yang bisa kami bantu hari ini?</h1>
                    <form className="w-full flex flex-col gap-y-4 lg:flex-row lg:justify-center lg:items-center lg:gap-x-4" action="">
                        <input className="mx-6 bg-lightGray lg:w-1/3 px-8 py-4 rounded-full focus:outline-none focus:ring focus:ring-purpleHaze" type="text" placeholder="Mencari jawaban ...."/>
                    </form>
                </div>
            </div>

            <section className="mt-[100px] mx-6 flex justify-center content-center">
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-b from-purpleHaze to-purpleRim px-4 py-5 rounded-full col-span-3 text-center text-white font-semibold">Akun Segamma</div>
                    <div className="bg-gradient-to-b from-purpleHaze to-purpleRim px-4 py-10 col-span-3 lg:col-span-1 rounded-lg text-center text-white font-semibold">Pengumuman Layanan</div>
                    <div className="bg-gradient-to-b from-purpleHaze to-purpleRim px-4 py-10 col-span-3 lg:col-span-1 rounded-lg text-center text-white font-semibold">Syarat & Ketentuan</div>
                    <div className="bg-gradient-to-b from-purpleHaze to-purpleRim px-4 py-10 col-span-3 lg:col-span-1 rounded-lg text-center text-white font-semibold">Keamanan Privasi</div>
                    <div className="bg-gradient-to-b from-purpleHaze to-purpleRim px-4 py-10 col-span-3 lg:col-span-1 rounded-lg text-center text-white font-semibold">Segamma Chat</div>
                    <div className="bg-gradient-to-b from-purpleHaze to-purpleRim px-4 py-10 col-span-3 lg:col-span-1 rounded-lg text-center text-white font-semibold">Tutorial</div>
                    <div className="bg-gradient-to-b from-purpleHaze to-purpleRim px-4 py-10 col-span-3 lg:col-span-1 rounded-lg text-center text-white font-semibold">Permasalahan Pembayaran</div>
                </div>
            </section>
        </AppLayout>
    );
}
