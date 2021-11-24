const express = require('express');
const path = require('path');
// const exphbs = require('express-handlebars');
// const routes = require ('');
//const hbs = exphbs.create({  });

const PORT = process.env.PORT || 3001;

const app = express();

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');


app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html')))


app.listen(PORT, () => console.log('App listening on port ${PORT}'));