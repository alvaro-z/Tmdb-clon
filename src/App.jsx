import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import ReactDOM from 'react-dom';
import Header from "./components/Header";
import MGrid from "./commons/MGrid";
import Movie from "./commons/Movie";
import useQuery from "./hooks/useQuery.js";
import useDebounce from "./hooks/useDebounce"; /* hook para retrasar el tiempo de redresco del input */
import NewUser from "./Register";

const App = () => {
  const query = useQuery();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 300);
  
  return (
    <div>
        <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<MGrid key={debouncedSearch} search={debouncedSearch} />}
          />
          <Route exact path="/movies/:mId" element={<Movie />} />
          <Route exact path="/register" element={<NewUser/>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
