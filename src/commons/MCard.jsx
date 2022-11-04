import React from "react";
import { Link } from "react-router-dom";
import styles from "../commons/MCard.module.css";
import imgPlaceholder from "../utils/imgPlaceholder.jpg"


const MCard = ({ movie }) => {
  const imageUrl = movie.poster_path?`https://image.tmdb.org/t/p/w300${movie.poster_path}` : imgPlaceholder;
  return (
    <li className={styles.movieCard}>
      <Link to={`/movies/${movie.id}`}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
};

export default MCard;
