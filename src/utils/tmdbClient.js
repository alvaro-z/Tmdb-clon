import axios from "axios";

const tmdbGet = (path) => {
  return axios
    .get("https://api.themoviedb.org/3" + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTNkNWYzZWZiYjdlNDBhZWE1NWE0NDM1YmZiMmE5YiIsInN1YiI6IjYyMTc3NDk5N2ZjYWIzMDA2MjQzNGY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MX5RAoP5BaJGmwVGj0jEywizhIfisXFBAltyZfDln9o",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((res) => res.data);
};

export default tmdbGet;
