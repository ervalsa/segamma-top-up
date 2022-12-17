import NavLinkRounded from "./NavLinkRounded";
import Skeleton from 'react-loading-skeleton';

export default function Game({ game }) {
    return (
        <article className="mt-24 flex justify-center items-center text-white bg-gradient-to-b from-lighterGray to-darkGray rounded-3xl">
            <div className="relative w-full h-full text-center flex flex-col justify-center items-center" key={game.id}>
                <Skeleton />
                <img className="absolute rounded-2xl -top-16 w-32 h-32" src={game.image_icon} alt="Photo Profile" />
                <div className="flex w-full h-full flex-col gap-y-2 pt-20 px-4 mb-6">
                    <p className="mt-2 break-words text-sm">{game.publisher}</p>
                    <h4 className="font-bold text-lg">{game.title}</h4>
                </div>
                <NavLinkRounded to={`/games/${game.id}`} className="py-2 mb-6 font-semibold">Top Up</NavLinkRounded>
            </div>
        </article>
    )
}