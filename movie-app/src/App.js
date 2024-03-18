import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import moviesData from './movies'; 

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  const handleFilterChange = (searchTerm) => {
    const filtered = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
