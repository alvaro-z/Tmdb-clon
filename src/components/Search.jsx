import React from "react";
import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useQuery from "../hooks/useQuery";

const Search = () => {
  
  const navigate = useNavigate();

  const query = useQuery();
  const search = query.get("search");

  

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
      <div className={style.searchBox}>
        <input
          className={style.searchInput}
          type="text"
          value={search??""}
          placeholder="Title....  "
          onChange={(e) => {
            const value = e.target.value;
            navigate("/?search=" + value);
          }}
        />
        <button className={style.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default Search;
