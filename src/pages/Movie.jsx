// src/pages/Movie.jsx
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: 2,
    title: "Inception",
    time: 148,
    genres: ["Action", "Sci-Fi"]
  }
];

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <>
      <NavBar />
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <p>{movie.time} minutes</p>
          <div>
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre} </span>
            ))}
          </div>
        </>
      ) : (
        <h1>Movie not found</h1>
      )}
    </>
  );
}

export default Movie;
