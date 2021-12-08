const express = require('express');
const routes = require('./controllers');
const sequelize = require("./config/connection");
const path = require('path');
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
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
    db: sequelize,
  }),
};

app.use(session(sess));

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



// turn on routes
// app.engine("handlebars", hbs.engine);
// app.engine("handlebars", exphbs({defaultLayout: 'main'}));
// app.set("view engine", "handlebars");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'views')));


app.use(routes);

app.get('/', function(req, res) {
  res.render('homepage');
});

app.get('/recipes', function(req, res) {
  res.render('recipe');
});

app.get('/category', function(req, res) {
  res.render('category');
});

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on " + PORT));
});

