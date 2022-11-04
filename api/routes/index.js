const express = require("express");
const passport = require("passport");
const Users = require("../models/Users");
const router = express.Router();

//Encontrar todos los Users
router.get("/", (req, res, next) => {
  Users.findAll().then((users) => {
    res.send(users);
  });
});

//Crea y registra un usuario
router.post("/register", (req, res, next) => {
  Users.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});
//Loggea un usuario
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.send(req.user);
});

router.get("/loquelemuestrelogueado", (req, res) => {
  if (req.user) {
    res.send("contenidoAMostrar");
  } else {
    res.sendStatus(401);
  }
});

//Desloguea al usuario
router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});
//hace que el front reconozca la session si refrescamos
router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

module.exports = router;
