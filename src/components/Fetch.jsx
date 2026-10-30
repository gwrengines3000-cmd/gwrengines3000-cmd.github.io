import useFetch from '../hooks/useFetch'

const Countries = () => {
    const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=20')

    if (loading) return <p className="pokemon">Loading pokemons...</p>
    if (error) return <p className="pokemon">Error: {error}</p>

    return (
        <div className="pokemon">
            <h2>Pokemons</h2>
            <ul>
                {data.results.slice(0, 10).map(pokemon => (
                    <li key={pokemon.name}>
                        <span>{pokemon.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Countries
