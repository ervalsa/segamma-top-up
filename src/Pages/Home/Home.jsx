import AppLayout from "../../layouts/AppLayout";
import WhyItem from "../../components/WhyItem";
import React from "react";
import '../../assets/Slider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularGameItem from "../../components/PopularGameItem";

export default function Home() {

    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
    }

    return (
        <AppLayout>
            <section className={'pt-[100px] pb-[50px]'}>
                <div className={'container'}>
                    <div className={'flex flex-col gap-y-10 lg:flex-row lg:items-center justify-between w-full gap-x-6 text-white'}>
                        <div className={'flex flex-col justify-center gap-y-6 lg:w-1/2'}>
                            <p>Halo Gamers,</p>
                            <h1 className={'text-5xl font-bold'}>Topup Murah, Cepat, dan Terpercaya</h1>
                            <p className={'text-xl'}>Kami menyediakan jutaan cara untuk membantu <br/> players menjadi pemenang sejati</p>
                            <div className={'flex flex-row items-center gap-x-6'}>
                                <p className={'py-4 px-6 font-bold rounded-full bg-gradient-to-b from-purleHaze to-purlerRim hover:cursor-pointer'}>Ayo Topup Sekarang</p>
                                <p className={'border-b-2'}>Bantuan</p>
                            </div>
                        </div>
                        <img src={'../public/assets/hero_image.png'} alt="Hero Image"/>
                    </div>
                </div>
            </section>

            <section className={'py-[50px]'}>
                <div className={'container'}>
                    <div className={'text-center text-white'}>
                        <h1 className={'text-4xl font-bold mb-10'}>Kenapa Harus Kami</h1>
                        <div className={'flex gap-x-10'}>
                            <WhyItem
                                imgPath={'../public/assets/why_icon_1.svg'}
                                title={'Pilihan Banyak Game'}
                                description={'Terdapat Pilihan game pc dan mobile yang bisa kamu pilih untuk topup'}
                            />

                            <WhyItem
                                imgPath={'../public/assets/why_icon_2.svg'}
                                title={'Murah dan Cepat'}
                                description={'Pembayaran mudah dengan menggunakan e-wallet atau mobile banking'}
                            />

                            <WhyItem
                                imgPath={'../public/assets/why_icon_3.svg'}
                                title={'Promo Berlimpah'}
                                description={'Rasakan banyaknya promo yang ditawarkan oleh website kami'}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={'py-[50px]'}>
                <div className={'container text-white'}>
                    <h1 className={'text-4xl font-bold mb-10'}>Game Populer</h1>
                    <Slider {...settings}>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                        <PopularGameItem/>
                    </Slider>
                </div>
            </section>

            <section className={'py-[50px]'}>
                <div className={'container text-white'}>
                    <h1 className={'text-4xl text-center font-bold mb-10'}>Metode Pembayaran</h1>
                </div>
            </section>
        </AppLayout>
    );
}