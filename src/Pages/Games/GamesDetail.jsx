import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import AppLayout from "../../layouts/AppLayout";

export default function GamesDetail() {

    const { gameId } = useParams();

    const [ games, setGames ] = useState([]);

    useEffect(() => {
        document.title = "Segamma | Game Detail";

        const fetchGame = async () => {
            try {
                const result = await axios.get(`https://639a64b2d51415019734d045.mockapi.io/api/v1/games/${gameId}`)
                setGames(result.data)
            } catch(error) {
                console.log(error)
            }
        };
        fetchGame();
    }, [gameId]);

    return (
        <AppLayout>
            <div className="container">
                <div className="text-white mt-16 px-4 lg:px-0">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-4xl">Top Up</h1>
                        <p>Perkuat akunmu dengan top up dan jadilah yang terkuat</p>
                    </div>
                    <div className="mt-16 flex flex-col lg:flex-row gap-x-6">
                        <img className="object-cover rounded-xl w-[300px] h-[400px]" src={games.image_cover} alt="" />
                        <div className="mt-4">
                            <h1 className="text-3xl font-bold">{games.title}</h1>
                            <p className="mt-2">{`Category : ${games.type}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}