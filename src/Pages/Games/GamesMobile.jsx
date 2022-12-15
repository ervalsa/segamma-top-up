import React, { useEffect, useState } from "react";
import axios from "axios";
import NavLinkRounded from "../../components/NavLinkRounded.jsx";
import AppLayout from "../../layouts/AppLayout.jsx";

export default function GamesMobile() {

    const [users, setUser] = useState([]);
    const baseUrl = "https://639a64b2d51415019734d045.mockapi.io/api/v1/users?page=1&limit=5"

    useEffect(() => {
        document.title = "Segamma | Games";
    }, []);

    useEffect(() => {
        axios.get(baseUrl)
        .then((response) => {
            setUser(response.data);
        });
    }, []);

    return (
        <AppLayout>
            <div className="container">
                <div className="flex flex-col justify-center items-center mt-16 text-white">
                    <h1 className="text-2xl font-bold mb-8">Game Mobile</h1>
                    <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
                        <input className="bg-lightGray py-4 px-8 rounded-full" type="text" placeholder="Cari game pc kesukaanmu"/>
                        <div className="bg-lightGray w-full lg:w-48 py-4 px-4 rounded-full">
                            <select className="bg-lightGray w-full px-4">
                                <option value="asc">A-Z</option>
                                <option value="desc">Z-A</option>
                            </select>
                        </div>
                        <NavLinkRounded className="self-center w-full lg:w-36 py-4">Cari Game</NavLinkRounded>
                    </div>
                </div>
                <div className="text-white grid grid-cols-1 md:grid-cols-2 mx-4 lg:grid-cols-4 gap-x-28 mt-20">
                    {users.map((user) => {
                        return (
                            <div className="mt-24 flex justify-center items-center text-white bg-gradient-to-b from-lighterGray to-darkGray rounded-3xl" key={user.id}>
                                <div className="relative w-full h-full text-center flex flex-col justify-center items-center">
                                    <img className="absolute rounded-2xl -top-16 w-32 h-32" src={user.avatar} alt="Photo Profile" />
                                    <div className="flex w-full h-full flex-col gap-y-2 pt-20 px-4 mb-6">
                                        <p className="mt-2 break-words text-sm">{user.email}</p>
                                        <h4 className="font-bold text-lg">{user.name}</h4>
                                    </div>
                                    <NavLinkRounded className="py-2 mb-6 font-semibold">Top Up</NavLinkRounded>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </AppLayout>
    );
}
