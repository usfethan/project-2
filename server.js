const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require("./config/connection");
const path = require('path');
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });
const session = require('express-session'); 

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitalized: true,
  store: new SequelizeStore ({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// turn on routes
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);
// app.get("/", (req, res) => res.render("homepage"));
// app.get("/login-page", (req, res) => res.render("login-page"));
// app.get("/category", (req, res) => res.render("category"));
// app.get("/recipe-info", (req, res) => res.render("recipe-info"));
// app.get("/comments", (req, res) => res.render("comments"));
// app.get("/single-recipe", (req, res) => res.render("single-recipe"));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});