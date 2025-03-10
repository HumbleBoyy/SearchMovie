import React, { useEffect, useState } from 'react'
import "./App.css"
import MovieCard from './components/movieCard';

// c032e2d7

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('')


  const searchMovies = async (title) => {
          const response = await fetch(`${API_URL}&s=${title}`);
          const data = await response.json();

          setMovies(data.Search)
  }

  useEffect(()=> {
    searchMovies("Tom and Jerry")
  }, []);


  return (
    <div className='app'>
       <h1>SearchMovies</h1>
       <div className='search'>
            <input
            type='text'
             placeholder='Search....'
             value={searchTerm}
             onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <button
            className='btnSearch'
             onClick={()=> searchMovies(searchTerm)}
            >
               Search
            </button>
       </div>

          {movies?.length > 0 
           ?(
            <div className='container'>
                 {movies.map((movie) => (
                   <MovieCard movie={movie}/>
                 ))}
              </div>
           ): (
             <>
              <div className='empty'>
                 <h2>No movies found!</h2>
              </div>
             </>
           )
          }
     
    </div>
  )
}

export default App
