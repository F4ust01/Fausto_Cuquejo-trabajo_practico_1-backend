// Imports
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

// Middlewares


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    return res.status(404);

})

// Starting the server
app.listen(port, () => console.log(`Server on port http://localhost:${port}`));