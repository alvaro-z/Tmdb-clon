import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import tmdbGet from "../utils/tmdbClient";
import styles from "./Movie.module.css";
import Spinner from "./Spinner";
import imgPlaceholder from "../utils/imgPlaceholder.jpg";

const Movie = () => {
  const { mId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    tmdbGet("/movie/" + mId).then((movie) => {
      setLoading(false);
      setMovie(movie);
    }); /* usamos la funcion tmdb en utils que ejecuta el axios a la api */
  }, [mId]);

  if (loading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }
  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : imgPlaceholder; /* tratar de refactorizar */

  return (
    <div className={styles.detailsMovie}>
      <img
        className={`${styles.col} ${styles.movieImg}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Premiere: </strong>
          {movie.release_date.split("-").reverse().join("-")}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
        <p>
          <strong>Vote average: </strong>
          {movie.vote_average}
        </p>
      </div>
    </div>
  );
};

export default Movie;
