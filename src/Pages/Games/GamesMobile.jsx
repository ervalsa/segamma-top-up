import React, { useEffect, useState } from "react";
import axios from "axios";
import AppLayout from "../../layouts/AppLayout.jsx";
import { getAllMobileGames, getAllUsers } from "../../api/api.js";
import ListGames from "../../components/ListGames.jsx";

export default function GamesMobile() {

    const [users, setUsers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        const timeoutId = setTimeout(() => {
            const nameSearch = e.target.value;
            console.log(nameSearch);
            if (!nameSearch) return setSearchResults(users);

            const resultArray = users.filter(user => user.name.toLowerCase().includes(nameSearch));
            setSearchResults(resultArray);
        }, 1000)
        return () => clearTimeout(timeoutId)
    }

    const onSelectionChange = (e) => {
        const sortDirection = e.target.value;
        const copyArray = [...searchResults];

        copyArray.sort((a, b) => {
            return sortDirection === '0' ? a.id - b.id : b.id - a.id;
        })
        setSearchResults(copyArray);
    }

    useEffect(() => {
        document.title = "Segamma | Games Mobile";

        getAllMobileGames().then(json => {
            setUsers(json)
            setSearchResults(json)
        })
    }, []);

    return (
        <AppLayout>
            <div className="container">
                <div className="flex flex-col justify-center items-center mt-16 text-white">
                    <h1 className="text-2xl font-bold mb-8">Game Mobile</h1>
                    <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
                        <input onChange={handleSearchChange} value={users.name} className="bg-lightGray py-4 px-8 rounded-full" type="text" placeholder="Cari game mobile kesukaanmu"/>
                        <div className="bg-lightGray w-full lg:w-48 py-4 px-4 rounded-full">
                            <select onChange={onSelectionChange} className="bg-lightGray w-full px-4">
                                <option value={0}>A-Z</option>
                                <option value={1}>Z-A</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="text-white grid grid-cols-1 md:grid-cols-2 mx-4 lg:grid-cols-4 gap-x-28 mt-20">
                    <ListGames searchResults={searchResults}/>
                </div>
            </div>
        </AppLayout>
    );
}
