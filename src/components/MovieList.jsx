import { useState, useEffect } from 'react'

const MovieList = () => {
  const [ movies, setMovies ]  = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    (async () => {
        try {
        const response = await fetch('/Data/movies.json')
        if(!response.ok) throw new Error('Failed to fetch movies')
        const data = await response.json()
        setMovies(data)
    }
    catch (error){
      setError(error.message)
    }
    finally{
        setIsLoading(false)
    }
    })()
  }, [])
  
  if (isLoading) return <div>Loading movies...</div>
  if (error) return <div>Error: {error}</div>

  return (
  <div>
    {movies.map((movie) => (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Genre: {movie.genre}</p>
        <p>Director: {movie.director}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    ))}
  </div>
)

}

export default MovieList