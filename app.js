// Imports
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const {sequelize} = require("./database")

const { conectarDB } = require('./database.js');
const relaciones = require('./models/relaciones.js');


const app = express();
const port = process.env.PORT || 4000

// Middlewares

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use("/api/playlist", require('./routes/playlist.routes'));
app.use("/api/canciones", require('./routes/canciones.routes.js'));
app.use("/api/users", require('./routes/users.routes.js'));

app.use((req, res, next) => {
    return res.status(404);
    
})
conectarDB()
relaciones()


// Starting the server

sequelize.sync({ force: false }).then(() => {
     console.log('Tabla de Playlist creada');
     app.listen(port, () => console.log(`Server on port http://localhost:${port}`));
});