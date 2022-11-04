import React, { useEffect, useState } from "react";
import MCard from "./MCard";
import styles from "../commons/MGrid.module.css";
import tmdbGet from "../utils/tmdbClient";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import NoResults from "./NoResults";

const MGrid = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const searchUrl = search
      ? `/search/movie?query=${search}&page=${page}`
      : `/discover/movie?page=${page}`; /* &page= y page son parametros que requiere InfiniteScroll */
    tmdbGet(searchUrl).then((movies) => {
      setMovies((prevMovies) => prevMovies.concat(movies.results));
      setHasmore(movies.page < movies.total_pages);
      setLoading(false)
    }); /* usamos la funcion tmdb en utils que ejecuta el axios a la api */
  }, [search, page]);

  if (!loading && movies.length === 0) {
    return <NoResults />;
  }

  return (
    <InfiniteScroll
      dataLength={
        movies.length
      } /* dataLength,hasMore y next son parametros de InfiniteScroll */
      hasMore={hasmore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={
        <Spinner />
      } /* agregamos la propiedad loader de InfiniteScroll para usar el Spinner */
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MCard
            key={movie.id}
            movie={movie}
          /> /* utilazamos el componente MCard con su key y le enviamos su prop */
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default MGrid;
