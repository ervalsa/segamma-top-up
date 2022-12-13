import AppLayout from "../../layouts/AppLayout";
import WhyItem from "../../components/WhyItem";
import React, { useEffect } from "react";
import NavLink from "../../components/NavLink";
import NavLinkRounded from "../../components/NavLinkRounded";

export default function Home() {

    useEffect(() => {
        document.title = "Segamma | Home"
    }, []);

    return (
        <AppLayout>
            <section className='pt-[100px] pb-[50px] mx-6 lg:mx-0'>
                <div className='container'>
                    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center justify-between w-full gap-x-6 text-white'>
                        <div className='flex flex-col justify-center gap-y-6 lg:w-1/2'>
                            <p>Halo Gamers,</p>
                            <h1 className={'text-5xl font-bold'}>Topup Murah, Cepat, dan Terpercaya</h1>
                            <p className={'text-xl'}>Kami menyediakan jutaan cara untuk membantu <br/> players menjadi pemenang sejati</p>
                            <div className={'flex flex-row items-center gap-x-6'}>
                                <p className={'py-4 px-6 font-bold rounded-full bg-gradient-to-b from-purpleHaze to-purpleRim hover:cursor-pointer'}>Ayo Topup Sekarang</p>
                                <NavLink>Bantuan</NavLink>
                            </div>
                        </div>
                        <img src={'../assets/hero_image.png'} alt="Hero Image"/>
                    </div>
                </div>
            </section>

            <section className='py-[50px] mx-6 lg:mx-0'>
                <div className='container'>
                    <div className='text-center text-white'>
                        <h1 className='text-4xl font-bold mb-10'>Kenapa Harus Kami</h1>
                        <div className='flex flex-col lg:flex-row gap-x-10'>
                            <WhyItem
                                imgPath={'../assets/why_icon_1.svg'}
                                title={'Pilihan Banyak Game'}
                                description={'Terdapat Pilihan game pc dan mobile yang bisa kamu pilih untuk topup'}/>

                            <WhyItem
                                imgPath={'../assets/why_icon_2.svg'}
                                title={'Murah dan Cepat'}
                                description={'Pembayaran mudah dengan menggunakan e-wallet atau mobile banking'}/>

                            <WhyItem
                                imgPath={'../assets/why_icon_3.svg'}
                                title={'Promo Berlimpah'}
                                description={'Rasakan banyaknya promo yang ditawarkan oleh website kami'}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[50px] mx-6 lg:mx-0">
                <div className="container">
                    <div className="flex flex-col lg:flex-row justify-center gap-16">
                        <img className="d-none" src="../assets/hero_login.png" alt="People with VR" />
                        <div className="flex flex-col text-white justify-center gap-y-8">
                            <h1 className="text-4xl font-bold">Menangkan Permainan<br/>Jadilah Sang Juara</h1>
                            <p className="text-lg">Kami menyediakan beribu cara<br/>untuk mendukung player game sejati seperti<br/>dirimu untuk menjadi pemenang sejati</p>
                            <NavLinkRounded>Ayo Topup Sekarang</NavLinkRounded>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}