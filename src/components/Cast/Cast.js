import React, { useState, useEffect } from "react";
import { getMovieCast } from "../../helpers/requestMaker";
import { profileUrl } from "../../helpers/requestMaker";
import styles from "./Cast.module.css";

const Cast = (props) => {
  const [movieCast, setMovieCast] = useState([]);
  const movieId = props.match.params.movieId;

  useEffect(() => {
    getMovieCast(movieId).then((res) => setMovieCast(res.data.cast));
  }, [movieId]);
  return (
    <ul>
      {movieCast.map((cast) => {
        const { id, character, name, profile_path } = cast;

        return (
          <li key={id}>
            {(profile_path && (
              <img
                src={`${profileUrl}${profile_path}`}
                alt={name}
                className={styles.photo}
              />
            )) || <p>no photo</p>}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
