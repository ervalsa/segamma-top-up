import React, { useEffect } from "react";

export default function Login() {

    useEffect(() => {
        document.title = "Segamma | Login"
    }, []);

    return (
        <div className={'flex flex-row w-full text-white'}>
            <div className={'container'}>
                <div className={'bg-lightGray w-1/2'}>
                    <img src={'../assets/logo_rounded.png'} alt="Segamma Logo" className={'h-28 w-28'}/>
                    <div className={'mb-4'}>
                        <h1 className={'font-bold'}>Masuk</h1>
                        <p>Masuk untuk melakukan proses Topup</p>
                    </div>
                    <div>
                        <p>Alamat Email</p>
                        <p>Kata Sandi</p>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'bg-darkBlue w-1/2'}>
                    <img src={'../assets/hero_login.png'} alt="People with VR" />
                </div>
            </div>
        </div>
    )
}