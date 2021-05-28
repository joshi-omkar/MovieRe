import React, { useEffect, useState } from "react";
import "./App.css";
// import Latest from "./components/latest";
import Movie from "./components/movie";


// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c4540fc94d15227a9266c3801640f813&page=1
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=c4540fc94d15227a9266c3801640f813&query=";

const api_key = "c4540fc94d15227a9266c3801640f813"

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  // const [latest,setLatest] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if(search){
      const res = await fetch(SEARCH_API + search);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);

      setSearch('');
    }
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const onHandleClickPopuler = async (e) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    );
    const data = await res.json();
    setMovies(data.results);
    console.log(data.results);
  };
  const onHandleClickUpcoming = async (e) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
    );
    const data = await res.json();
    setMovies(data.results);
    console.log(data.results);
  };

  return (
    
    <div className="App">
      <header>
      <h2 onClick ={getMovie}>MovieRe</h2>

        <button type="submit" onClick={onHandleClickPopuler} className="button">
          Popular
        </button>

        <button type="submit" onClick={onHandleClickUpcoming} className="button">
          Upcoming
        </button>

        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="text"
            placeholder="search movie"
            value={search}
            onChange={handleOnChange}
          />
        </form>
      </header>

      <div className="movie-container">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            overview={movie.overview}
            vote_avg={movie.vote_average}
          />
        ))}
      </div>
    </div>
    
  );
}

export default App;
