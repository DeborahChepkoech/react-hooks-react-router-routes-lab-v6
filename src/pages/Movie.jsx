
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <h1>Loading...</h1>;

  return (
    <section>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
    </section>
  );
}

export default Movie;
