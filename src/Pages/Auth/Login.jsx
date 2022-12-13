import React, { useEffect } from "react";

export default function Login() {

    useEffect(() => {
        document.title = "Segamma | Login"
    }, []);

    return (
        <div className={'flex flex-row w-screen h-screen text-white'}>
            <div className={'basis-1/2  flex flex-col bg-lightGray'}>
                <div className="m-auto">
                    <img className="w-20 h-20" src="../assets/logo_rounded.png" alt="Logo Rounded"/>
                </div>
            </div>
            <div className={'basis-1/2 flex bg-darkBlue h-screen'}>
                <div className="m-auto">
                    <img src="../assets/hero_login.png" alt="Login hero"/>
                    <h1 className="text-center mt-10 text-xl font-bold">Menangkan Permainan<br/>Jadilah Sang Juara</h1>
                    <p className="text-center mt-6 text-lg">Kami menyediakan beribu cara<br/>untuk mendukung player game sejati seperti<br/>dirimu untuk menjadi pemenang sejati</p>
                </div>
            </div>
        </div>
    )
}