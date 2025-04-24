// src/pages/Directors.jsx
import NavBar from "../components/NavBar";

const directors = [
  {
    name: "Steven Spielberg",
    movies: ["Jaws", "E.T. the Extra-Terrestrial", "Jurassic Park"],
  },
  {
    name: "Christopher Nolan",
    movies: ["Inception", "The Dark Knight", "Dunkirk"],
  },
  {
    name: "Quentin Tarantino",
    movies: ["Pulp Fiction", "Kill Bill", "Inglourious Basterds"],
  },
];

function Directors() {
  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Directors;
