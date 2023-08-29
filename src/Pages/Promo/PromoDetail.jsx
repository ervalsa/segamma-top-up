import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../../layouts/AppLayout";

export default function PromoDetail() {

    const { promoId } = useParams()

    const [promos, setPromos] = useState([]);

    useEffect(() => {
        document.title = "Segamma | Promo Detail";

        const fetchPromo = async () => {
            try {
                const result = await axios.get(`https://639ccccf16d1763ab154ac15.mockapi.io/promo/${promoId}`)
                setPromos(result.data)
            } catch(error) {
                console.log(error)
            }
        };
        fetchPromo();
    }, [promoId]);

    return (
        <AppLayout>
            <div className="container">
                <div className="mt-16 text-white px-4 lg:px-0">
                    <img className="object-cover w-full h-[300px]" src={promos.promo_cover} alt="Promo Photo" />
                    <h1 className="mt-8 text-2xl font-bold">{promos.title}</h1>
                    <div className="w-full flex items-center gap-x-4">
                        <span className="flex flex-row gap-x-2 mt-4 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Berlaku Hingga
                        </span>
                        <p>{promos.promo_duration}</p>
                    </div>
                    <p className="mt-8">{promos.body}</p>
                </div>
            </div>
        </AppLayout>
    )
}