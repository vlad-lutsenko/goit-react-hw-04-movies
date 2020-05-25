import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDailyTrends } from "../../helpers/requestMaker";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const location = useLocation();

  useEffect(() => {
    getDailyTrends()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending today</h1>
      {error && <p>something gone wrong</p>}
      {!!movies.length && (
        <ul className={styles.list}>
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: location,
                },
              }}
              className={styles.link}
            >
              <li>{movie.title || movie.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default HomePage;
