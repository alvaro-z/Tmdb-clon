const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const db = require("./db");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const localStrategy = require("passport-local");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const User = require("./models/Users");

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sessions({ secret: "p5", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  /* estrategia de validacion de usuario */
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.serializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", routes);

app.use((error, req, res, next) => {
  res.status(500).send("Grave error");
});

db.sync({ force: false })
  .then(() => {
    app.listen(3001, () => {
      console.log("Servidor corriendo en http://localhost:3001");
    });
  })
  .catch((error) => console.log(error));
