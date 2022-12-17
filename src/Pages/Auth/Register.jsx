import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import NavLink from "../../components/NavLink";

export default function Register() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;

        setData({
            ...data,
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: data.email,
            email: data.email,
            password: data.password
        };

        axios.post("https://639a64b2d51415019734d045.mockapi.io/api/v1/users", userData)
        .then((response) => {console.log(response.status)})


    }

    useEffect(() => {
        document.title = "Segamma | Register";
    }, []);

    return (
        <div className="flex flex-col lg:h-screen justify-center items-center bg-lightGray text-white">
            <img className="w-24 h-24 self-center mt-8" src="../assets/logo_rounded.png" alt="Logo Rounded"/>
            <div className="flex flex-col gap-y-2 mt-4">
                <h1 className="text-2xl font-bold text-center">Daftar</h1>
                <p>Daftar untuk melakukan proses Topup</p>
            </div>
            <div className="lg:w-1/3">
                <form onSubmit={handleSubmit} className="text-xl mt-6">
                    <div className="flex flex-col gap-y-4 mb-6">
                        <label htmlFor="name">Nama</label>
                        <input onChange={handleChange} value={data.name} className="py-4 px-8 rounded-full bg-lightGray outline outline-1 focus:border-0 focus:outline-none focus:ring focus:ring-purpleHaze" type="text" name="name" placeholder="Masukkan nama anda"/>
                    </div>
                    <div className="flex flex-col gap-y-4 mb-6">
                        <label htmlFor="email">Alamat Email</label>
                        <input onChange={handleChange} value={data.email} className="py-4 px-8 rounded-full bg-lightGray outline outline-1 focus:border-0 focus:outline-none focus:ring focus:ring-purpleHaze" type="email" name="email" placeholder="Masukkan email anda"/>
                    </div>
                    {/* <div className="flex flex-col gap-y-4 mb-6">
                        <label htmlFor="password">Kata Sandi</label>
                        <input className="py-4 px-8 rounded-full bg-lightGray outline outline-1 focus:border-0 focus:outline-none focus:ring focus:ring-purpleHaze" type="password" name="password" placeholder="Masukkan kata sandi anda"/>
                    </div> */}
                    <div className="flex flex-col gap-y-4 mb-6">
                        <label htmlFor="password-confirm">Kata Sandi</label>
                        <input onChange={handleChange} value={data.password} className="py-4 px-8 rounded-full bg-lightGray outline outline-1 focus:border-0 focus:outline-none focus:ring focus:ring-purpleHaze" type="password" name="password" placeholder="Konfirmasi kata sandi anda"/>
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
