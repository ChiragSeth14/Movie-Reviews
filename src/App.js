import './App.css';
import api from './api/axiosConfig.js';
import { useEffect, useState } from 'react';
import Layout from './component/Layout';
import Home from './component/home/Home.js';
import Header from './component/header/Header';
import Trailer from './component/trailer/Trailer';
import Reviews from './component/reviews/Reviews';


function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data
      console.log(response.data);
      setMovie(singleMovie);
    }
    catch (err) {
      console.log(err);
    }
  }

  //this will make sure that the get method loads the movies when the app runs for the first time
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <Header />
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData}
            review={reviews} setReviews={setReviews} movie={movie} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
