import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout.jsx";

export default function TentangKami() {
    useEffect(() => {
        document.title = "Segamma | Tentang";
    }, []);

    return (
        <AppLayout>
            <div className="relative h-[600px]">
                <img className="absolute h-full object-cover top-0 left-0 w-screen opacity-40" src="/assets/banner_tentang_kami.svg" alt="Banner Promo" />
                <div className="absolute w-full h-full flex flex-col justify-center items-center gap-y-4 text-white z-10 lg:mx-0">
                    <h1 className="text-3xl text-center font-bold mx-6 lg:mx-0">Menyediakan produk game digital</h1>
                    <p className="mx-6 lg:mx-0 text-center">untuk semua pemain game sejati agar menjadi pemenang</p>
                </div>
            </div>

            <section className="mt-[100px] text-white">
                <h1 className="text-3xl font-bold text-center">Tim Kami</h1>
                <p className="text-center mt-3">Tim kami bekerja tanpa lelah untuk membuat dampak sebesar mungkin bagi gamer</p>
                <div className="mt-24 flex justify-center items-center">
                    <div className="relative w-52 text-center flex flex-col justify-center items-center">
                        <img className="absolute -top-16" src="../assets/photo_profile.svg" alt="Photo Profile" />
                        <div className="flex flex-col gap-y-2 pt-20 px-4 py-10 bg-gradient-to-b from-lighterGray to-darkGray rounded-lg">
                            <h4 className="text-lg font-bold">Ervalsa Dwi Nanda</h4>
                            <p>Web Developer</p>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}
