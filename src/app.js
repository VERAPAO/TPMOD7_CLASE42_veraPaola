const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();


//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

//Aquí pueden colocar const genresRoutesApi = require('./routes/api/genresRoutesApi')las rutas de las APIs
const genresRoutesApi = require('./routes/api/genresRoutesApi')
const moviesRoutesApi = require('./routes/api/moviesRoutesApi')
const actorsRoutesApi = require('./routes/api/actorsRoutesApi')
// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(genresRoutesApi);
app.use(moviesRoutesApi)
app.use(actorsRoutesApi)

//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
