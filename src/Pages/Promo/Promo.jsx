import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout.jsx";
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
import { getAllPromo } from "../../api/api.js";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Promo() {

    const [promos, setPromos] = useState([]);

    useEffect(() => {
        document.title = "Segamma | Promo";

        getAllPromo().then(json => {
            setPromos(json)
        })
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
            <div className="container">
                <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 gap-x-28">
                    {promos.map((promo) => {
                        return (
                            <div className="mt-20 bg-lightGray overflow-clip w-full flex flex-col items-center text-white bg-gradient-to-b from-lighterGray to-darkGray rounded-lg" key={promo.id}>
                                <img className="w-full h-[150px] object-cover" src={promo.promo_cover || <Skeleton count={10}/>} alt="Photo Promo" />
                                <div className="flex flex-col mt-4">
                                    <h1 className="line-clamp-1 font-bold px-4 w-full text-center">{promo.title}</h1>
                                </div>
                                <div className="w-full px-4 mb-4 flex flex-col text-center">
                                    <span className="flex flex-row justify-center gap-x-2 mt-4 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Berlaku Hingga
                                    </span>
                                    <p className="w-full text-center mb-4">{promo.promo_duration}</p>
                                    <Link className="w-full py-2 hover:text-white bg-gradient-to-b from-purpleHaze to-purpleRim rounded-lg">Lihat Detail</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </AppLayout>
    );
}
