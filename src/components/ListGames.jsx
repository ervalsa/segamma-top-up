import Game from "./Game";

export default function ListGames({ searchResults }) {

    const results = searchResults.map(game => <Game key={game.id} game={game}/>);

    const content = results?.length ? results : <article><p>No Mathing Data</p></article>

    return (
        <>
            {content}
        </>
    )
}