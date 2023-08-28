// Imports
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

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
app.use(require('./routes/playlist.routes'));

app.use((req, res, next) => {
    return res.status(404);
    
})
conectarDB()
relaciones()
// Starting the server
app.listen(port, () => console.log(`Server on port http://localhost:${port}`));