import axios from "axios";
import React from "react";
import useInput from "./hooks/useInput.js";

const NewUser = () => {
  const name = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/api/register", {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      })
      .then(() => alert("USUARIO CREADO"))
      .catch((err)=>console.log(err))
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" onChange={name.onChange}></input>
        <label>Apellido</label>
        <input type="text" onChange={lastName.onChange}></input>
        <label>Email</label>
        <input type="text" onChange={email.onChange}></input>
        <label>Password</label>
        <input type="text" onChange={password.onChange}></input>
        <button>enviar</button>
      </form>
    </div>
  );
};

export default NewUser;
