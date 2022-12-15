import axios from "axios";
import React, { useState, useEffect } from "react";
import NavLink from "../../components/NavLink";

export default function Login() {

    useEffect(() => {
        document.title = "Segamma | Login"
    }, []);

    return (
        <div className='flex flex-row w-screen h-screen text-white font-inter'>
            <div className='w-full lg:basis-1/2 flex flex-col justify-center items-center bg-lightGray'>
                <div className="w-3/4 flex flex-col">
                    <img className="w-24 h-24 self-center" src="../assets/logo_rounded.png" alt="Logo Rounded"/>
                    <div className="flex flex-col gap-y-2 mt-4">
                        <h1></h1>
                        <h1 className="text-2xl font-bold">Masuk</h1>
                        <p>Masuk untuk melakukan proses Topup</p>
                    </div>
                    <form action="" className="text-xl mt-6">
                        <div className="flex flex-col gap-y-4 mb-4">
                            <label htmlFor="email">Alamat Email</label>
                            <input className="py-4 px-8 rounded-full bg-lightGray outline outline-1 focus:border-0 focus:outline-none focus:ring focus:ring-purpleHaze" type="email" name="email" placeholder="Masukkan email anda"/>
                        </div>
                        <div className="flex flex-col gap-y-4 mb-4">
                            <label htmlFor="password">Password</label>
                            <input className="py-4 px-8 rounded-full bg-lightGray outline outline-1 focus:border-0 focus:outline-none focus:ring focus:ring-purpleHaze" type="password" name="password" placeholder="Masukkan password anda"/>
                        </div>
                        <NavLink className="mb-8 text-lg text-purpleHaze font-semibold flex justify-end underline">Lupa Kata Sandi?</NavLink>
                        <input className="w-full py-4 hover:cursor-pointer font-semibold rounded-full bg-gradient-to-b from-purpleHaze to-purpleRim" type="submit" value="Masuk"/>
                        <div className="flex flex-col lg:flex-row text-center gap-y-2 lg:gap-x-3 justify-center mt-4">
                            <label htmlFor="no-account">Tidak punya akun?</label>
                            <NavLink className="text-purpleHaze font-semibold underline" to={'/register'}>Daftar di sini</NavLink>
                        </div>
                    </form>
                </div>
            </div>
            <div className='hidden lg:basis-1/2 lg:flex lg:bg-darkBlue lg:h-screen'>
                <div className="m-auto">
                    <img src="../assets/hero_login.png" alt="Login hero"/>
                    <h1 className="text-center mt-10 text-xl font-bold">Menangkan Permainan<br/>Jadilah Sang Juara</h1>
                    <p className="text-center mt-6 text-lg">Kami menyediakan beribu cara<br/>untuk mendukung player game sejati seperti<br/>dirimu untuk menjadi pemenang sejati</p>
                </div>
            </div>
        </div>
    )
}