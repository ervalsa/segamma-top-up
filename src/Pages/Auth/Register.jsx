import React, { useEffect } from "react";
import NavLink from "../../components/NavLink";

export default function Register() {
    useEffect(() => {
        document.title = "Segamma | Bantuan";
    }, []);

    return (
        <div className="flex flex-col lg:h-screen justify-center items-center bg-lightGray text-white">
            <img className="w-24 h-24 self-center mt-8" src="../assets/logo_rounded.png" alt="Logo Rounded"/>
            <div className="flex flex-col gap-y-2 mt-4">
                <h1 className="text-2xl font-bold text-center">Daftar</h1>
                <p>Daftar untuk melakukan proses Topup</p>
            </div>
            <div className="lg:w-1/3">
                <form action="" className="text-xl mt-6">
                    <div className="flex flex-col gap-y-4 mb-6">
                        <label htmlFor="name">Nama</label>
                        <input className="py-4 px-8 rounded-full bg-lightGray outline outline-1 focus:border-0 focus:outline-none focus:ring focus:ring-purpleHaze" type="text" name="name" placeholder="Masukkan nama anda"/>
                    </div>
                    <div className="flex flex-col gap-y-4 mb-6">
                        <label htmlFor="email">Alamat Email</label>
                        <input className="py-4 px-8 rounded-full bg-lightGray outline outline-1 focus:border-0 focus:outline-none focus:ring focus:ring-purpleHaze" type="email" name="email" placeholder="Masukkan email anda"/>
                    </div>
                    <div className="flex flex-col gap-y-4 mb-6">
                        <label htmlFor="password">Kata Sandi</label>
                        <input className="py-4 px-8 rounded-full bg-lightGray outline outline-1 focus:border-0 focus:outline-none focus:ring focus:ring-purpleHaze" type="password" name="password" placeholder="Masukkan kata sandi anda"/>
                    </div>
                    <div className="flex flex-col gap-y-4 mb-6">
                        <label htmlFor="password-confirm">Konfirmasi Kata Sandi</label>
                        <input className="py-4 px-8 rounded-full bg-lightGray outline outline-1 focus:border-0 focus:outline-none focus:ring focus:ring-purpleHaze" type="password" name="password-confirm" placeholder="Konfirmasi kata sandi anda"/>
                    </div>
                    <input className="w-full py-4 hover:cursor-pointer font-semibold rounded-full bg-gradient-to-b from-purpleHaze to-purpleRim" type="submit" value="Daftar"/>
                    <div className="flex flex-col lg:flex-row mb-5 gap-x-3 justify-center mt-6 text-center">
                        <label htmlFor="have-account">Sudah punya akun?</label>
                        <NavLink className="text-purpleHaze font-semibold underline" to={'/login'}>Masuk di sini</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}
