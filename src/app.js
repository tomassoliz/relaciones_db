const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const app = express();

app.use(methodOverride('_method'));

const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));