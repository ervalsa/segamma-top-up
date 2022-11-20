import AppLayout from "../../layouts/AppLayout";
import SectionHelp from "../../components/SectionHelp.jsx";

export default function Home() {
    return (
        <AppLayout>
            <section className={'py-[100px]'}>
                <div className={'container'}>
                    <div className={'flex items-center justify-between w-full gap-x-6 text-white'}>
                        <div className={'flex flex-col justify-center gap-y-6 w-1/2'}>
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

            <section className={'py-[100px]'}>
                <div className={'container'}>
                    <div className={'text-center text-white'}>
                        <h1 className={'text-4xl font-bold'}>Kenapa Harus Kami</h1>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}